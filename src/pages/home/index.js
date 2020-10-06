import React from 'react';

 import { Home } from './styles';

//componentes
import Switch from '../../components/switchToggle/index'
import Menu from '../../components/menu/index'

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
			if(data) {
				//aqui vai retornar uma string gigante com o conteudo coletado da noticia, tem que colocar o valor disso aqui, no text area
			}

		} catch (error) {
			alert('Houve um erro ao pesquisar essa url, por gentileza tente outra url ou use texto');
		}

	}

	const sendNews = async (content, url = '') => {
		const authorization = localStorage.getItem('qwert');
		if(!authorization) window.location.reload(true); //supondo que o usuario ta logado, deletou o localStorage,e tenta enviar uma noticia, é pra desloga-lo, o reload fará isso
		const settings = {
			method: 'POST',
			body: JSON.stringify({content, url}),
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': authorization,
			}
		}
		try {
			const response = await fetch('http://tcspedroverani.herokuapp.com/news/create', settings);
			const data = await response.json();
			if(data.success === 'ok') {
				console.log(data.veredict); //veredict diz se a noticia é true ou false;
			}
		} catch (error) {
			
		}
		
	}



  return (
    <>
      <Menu/>
      <Home>
        <div className="header">
          <div>
            <p className='header-title'>Identifique se a noticia é falsa.</p>
            <Switch/>
            
          </div>
        </div>
        <div className="content">
          <textarea className="content-textarea" placeholder="Insira o texto da noticia aqui..."  ></textarea>
          <button type='submit'>Criar</button>
        </div>
        <div className="result"></div>
      </Home>
    </>
  )
}

export default HomePage;