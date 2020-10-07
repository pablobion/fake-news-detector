import React, { useReducer, useState } from 'react';

import { Home } from './styles';


//componentes
import Switch from '../../components/switchToggle/index'
import Menu from '../../components/menu/index'

//icons

import UrlIcon from '../../assets/link.svg'
import UrlIcon2 from '../../assets/link2.svg'
import TextIcon from '../../assets/text.svg'

function HomePage() {

	const scrapUrl = async url => {
		const settings = {
			method: 'POST',
			body: JSON.stringify(url),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		}
		try {
			const response = await fetch('http://tcspedroverani.herokuapp.com/news/scrap', settings);
			const data = await response.json();
			if (data) {
				//aqui vai retornar uma string gigante com o conteudo coletado da noticia, tem que colocar o valor disso aqui, no text area
			}

		} catch (error) {
			alert('Houve um erro ao pesquisar essa url, por gentileza tente outra url ou use texto');
		}

	}

	const sendNews = async (content, url = '') => {
		const authorization = localStorage.getItem('qwert');
		if (!authorization) window.location.reload(true); //supondo que o usuario ta logado, deletou o localStorage,e tenta enviar uma noticia, é pra desloga-lo, o reload fará isso
		const settings = {
			method: 'POST',
			body: JSON.stringify({ content, url }),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': authorization,
			}
		}
		try {
			const response = await fetch('http://tcspedroverani.herokuapp.com/news/create', settings);
			const data = await response.json();
			if (data.success === 'ok') {
				console.log(data.veredict); //veredict diz se a noticia é true ou false;
			}
		} catch (error) {

		}
	}

	const [userInput, setUserInput] = useReducer( //States da pagina
		(state, newState) => ({ ...state, ...newState }),
		{
			content: '',
			mode: 'url',
			url: '',
		}
	)

	const handleChange = evt => {
		const name = evt.target.name
		const newValue = evt.target.value
		setUserInput({ [name]: newValue })
	}

	const [mode, setMode] = useState('text')

	const changeMode = () => {
		mode === 'url' ? setMode('text') : setMode('url')
	}

	return (
		<>
			<Menu />
			<Home>
				<div className="header" id="section1">
					<div>
						<p className='header-title'>Identifique se a noticia é falsa.</p>
						{/* <a href="#section2">Click Me</a> */}
						{mode == 'text' && <button onClick={changeMode}>Mudar para {userInput.mode}</button>}
						{mode == 'url' && <button onClick={changeMode}>Mudar para texto</button>}

					</div>
				</div>
				<div className="content">
					{mode == 'text' &&
						<>
							<div className='textmode-title'>
								<img src={TextIcon} alt="" />
								<h3>Insira o texto da noticia abaixo</h3>
							</div>
							<textarea className="content-textarea" placeholder="Insira o texto da noticia aqui..." name='content' value={userInput.content} onChange={handleChange} ></textarea>
						</>
					}
					{mode == 'url' &&
						<>
							<div className='urlmode-title'>
								<img src={UrlIcon2} alt="" />
								<h3>Insira a url da noticia abaixo</h3>
							</div>
							<div className="urlmode">
								<img src={UrlIcon} alt="" />
								<input placeholder='Insira a url' name='url' value={userInput.url} onChange={handleChange} ></input>
							</div>
						</>
					}
					<a href="#section2">
					<button type='submit'>Enviar noticia</button>
					</a>
				</div>
				<div className="result" id="section2">
					<h1>Provavelmente é fake</h1>
				</div>
			</Home>
		</>
	)
}

export default HomePage;