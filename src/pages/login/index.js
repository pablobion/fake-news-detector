import React from 'react';

import { Container } from './styles';
import logoImg from '../../assets/logo4.svg'
import fakeNewsIcon from '../../assets/fakenewsicon.svg'

import { BrowserRouter, Link } from 'react-router-dom'
import Routes from '../../routes/routesSwitchLogin'


function login() {
  return (
    <>
      <Container>
        <img className='backgroundImage' src={logoImg} alt="" />

        <div className="page">
          <div className="leftside">
            <div className="title">
              <img src={fakeNewsIcon} alt="" />
              <p>Detector de Fake News</p>
            </div>
            <div className="modalLogin">
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </div>
          </div>
          {/* <div className="rightside">
            <div>
              <p className='detec-news'>Vamos ajudar você a detectar noticias falsas.</p>
              <p className='detec-emails'>Já encontramos 2 noticias falsas e enviamos mais de 90 e-mails avisando colegas.</p>
            </div>
          </div> */}
        </div>
      </Container>

    </>
  )


}

export default login;