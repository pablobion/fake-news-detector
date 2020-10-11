import React, { useReducer } from 'react'
import { Home, Result } from './styles'

//componentes
import Menu from '../../components/menu/index'

//icons
import UrlIcon from '../../assets/link.svg'
import UrlIcon2 from '../../assets/link2.svg'
import TextIcon from '../../assets/text.svg'

function DetectorPage() {

	const scrapUrl = async url => {
		const authorization = localStorage.getItem('qwert')
		const settings = {
			'method': 'POST',
			'body': JSON.stringify({url}),
			'headers': {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': authorization
			},
		}
		try {
			const response = await fetch('https://tcspedroverani.herokuapp.com/news/scrap', settings)
			const data = await response.json()
			return data;
			if (data) {
				//aqui vai retornar uma string gigante com o conteudo coletado da noticia, tem que colocar o valor disso aqui, no text area
			}
		} catch (error) {
			console.log(error);
			alert('Houve um erro ao pesquisar essa url, por gentileza tente outra url ou use texto')
		}
	}

	const sendNews = async (content, url = '') => {
		const authorization = localStorage.getItem('qwert')
		if (!authorization) window.location.reload(true) //supondo que o usuario ta logado, deletou o localStorage,e tenta enviar uma noticia, é pra desloga-lo, o reload fará isso
		const settings = {
			method: 'POST',
			body: JSON.stringify({ content, url }),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': authorization,
			},
		}
		try {
			const response = await fetch('https://tcspedroverani.herokuapp.com/news/create', settings)
			const data = await response.json()
			if (data.success === 'ok') {
				console.log(data.veredict) //veredict diz se a noticia é true ou false;
			}
		} catch (error) {}
	}

	const [userInput, setUserInput] = useReducer(
		//States da pagina
		(state, newState) => ({ ...state, ...newState }),
		{
			content: '',
			mode: 'url',
			url: '',

			//url mode
			pagination: '1',
			nameButton: 'Checar Noticia',
		}
	)

	const handleChange = (evt) => {
		const name = evt.target.name
		const newValue = evt.target.value
		setUserInput({ [name]: newValue })
	}

	const changeMode = () => {
		if (userInput.mode === 'url') {
			setUserInput({ ['mode']: 'text' }) //Mudando para o formato texto
			setUserInput({ ['url']: '' }) ///limpando campo da url caso mude o modo
		} else {
			setUserInput({ ['mode']: 'url' })
			setUserInput({ ['pagination']: '1' }) //Caso volte para url, voltar para paginação 1
			setUserInput({ ['nameButton']: 'Checar Noticia' })
			setUserInput({ ['content']: '' }) //limpando campo da noticia caso mude o modo
		}
	}

	const shake = (id) => {
		let auxid = document.getElementById(id) //Pega Div Url
		if (auxid) auxid.style = 'animation: shake 0.5s;' //APlica a animação e roda

		setTimeout(function () {
			// depois de 500 milissegundos tira a animação para depois rodar de novo
			auxid.style = 'animation: none;'
		}, 450)
	}

	const checkNews = async () => {
		//Função para habilitar textarea antes de enviar a noticia
		if ((userInput.pagination = '2')) {
			//Aqui envia a noticia depois de visualizar.
		}
		if (userInput.url) {
			//verifica se tem url preenchida
			setUserInput({ ['pagination']: '2' }) //Muda para pagina dois.
			document.getElementById('pagination1').style.background = 'white'
			document.getElementById('pagination2').style.background = 'lightgray'
			setUserInput({ ['nameButton']: 'Enviar Noticia' }) //Troca o nome do botão
			await scrapUrl(userInput.url);
		} else {
			shake('divurl')
		}
	}

	const changePagination = () => {
		if (userInput.pagination === '1') {
			// Não deixa trocar para paginação 2
			shake('divurl')
		} else {
			document.getElementById('pagination1').style.background = 'lightgray'
			document.getElementById('pagination2').style.background = 'white'
			setUserInput({ ['pagination']: '1' }) //Muda para pagina um.
			setUserInput({ ['nameButton']: 'Checar Noticia' })
		}
	}

	return (
		<>
			<Menu />
			<Home>
				<div className="header" id="section1">
					<div>
						<p className="header-title">Identifique se a noticia é falsa.</p>
						{/* <a href="#section2">Click Me</a> */}
						{userInput.mode === 'text' && <button onClick={changeMode}>Mudar para url</button>}
						{userInput.mode === 'url' && <button onClick={changeMode}>Mudar para texto</button>}
					</div>
				</div>
				<div className="content">
					{userInput.mode === 'text' && (
						<>
							<div className="textmode-title">
								<img src={TextIcon} alt="" />
								<h3>Insira o texto da noticia abaixo</h3>
							</div>
							<textarea className="content-textarea" placeholder="Insira o texto da noticia aqui..." name="content" value={userInput.content} onChange={handleChange}></textarea>
						</>
					)}
					{userInput.mode === 'url' && userInput.pagination === '1' && (
						<>
							<div className="urlmode-title">
								<img src={UrlIcon2} alt="" />
								<h3>Insira a url da noticia abaixo</h3>
							</div>
							<div className="urlmode" id="divurl">
								<img src={UrlIcon} alt="" />
								<input placeholder="Insira a url" name="url" value={userInput.url} onChange={handleChange} id="url"></input>
							</div>
						</>
					)}
					{userInput.mode === 'url' && userInput.pagination === '2' && (
						<>
							<h1 id="verify-news">Verifique se o trecho na noticia está correto</h1>
							<textarea className="content-textarea" name="content" value={userInput.content} onChange={handleChange}></textarea>
						</>
					)}
					<div className="content-footer">
						{userInput.mode === 'text' && (
							<a href="#section2">
								<button type="submit" id="sendnews">
									Enviar Noticia
								</button>
							</a>
						)}

						{userInput.mode === 'url' && (
							<>
								<div className="pagination">
									<button className="paginations" id="pagination1" onClick={changePagination}></button>
									<button className="paginations" id="pagination2" onClick={changePagination}></button>
								</div>

								<button type="submit" onClick={checkNews} id="sendnews">
									{userInput.nameButton}
								</button>
							</>
						)}
					</div>
				</div>

				<Result id="section2" color="lightgreen">
					<div className="div-title-result">
						<h1 className="title-result">A noticia provavelmente</h1>
						<h1 className="title-result">FAKE</h1>
					</div>
					<textarea className="content-textarea"></textarea>
				</Result>
			</Home>
		</>
	)
}

export default DetectorPage
