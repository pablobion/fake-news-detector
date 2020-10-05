import React from 'react';

 import { Home } from './styles';

//componentes
import Switch from '../../components/switchToggle/index'
import Menu from '../../components/menu/index'

function HomePage() {
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