import React, { useState } from 'react';

import { Menu, MenuMobile } from './styles';


import HomeIcon from '../../assets/home.svg'
import FakeIcon from '../../assets/fakenewsicon.svg'
import GroupIcon from '../../assets/group.svg'
import AboutIcon from '../../assets/about.svg'

function MenuComponent() {

  const [widthscreen, setWidthscreen] = useState(window.screen.width);


  return (
    <>
      {widthscreen < 500 && // Só renderiza se for tela de pc
        <MenuMobile>


          <input id="check" type="checkbox" />
          <label for="check">
            <div class="menu-hamb">
              <span class="hamburguer"></span>
            </div>
          </label>

          <ul class="ul-mbl">
            <div><img className='icon' src={FakeIcon} alt="" /><a href='#'>Detector</a></div>
            <div><img className='icon' src={GroupIcon} alt="" /><a href='#'>Grupos</a></div>
            <div><img className='icon' src={AboutIcon} alt="" /><a href='#'>Sobre Nós</a></div>
            
          </ul>
        </MenuMobile>
      }
      {widthscreen >= 500 && // Só renderiza se for tela de pc
        <Menu>
          <button>
            <div className='cell'>
              <img className='icon' src={FakeIcon} alt="" />
              <p>Detector</p>
            </div>
          </button>
          <button>
            <div className='cell'>
              <img className='icon' src={GroupIcon} alt="" />
              <p>Grupos</p>
            </div>
          </button>
          <button>
            <div className='cell'>
              <img className='icon' src={AboutIcon} alt="" />
              <p>Sobre Nós</p>
            </div>
          </button>
        </Menu>
      }
    </>

  )
}

export default MenuComponent;