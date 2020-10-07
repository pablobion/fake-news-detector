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
            <a href='#'><div><img className='icon' src={FakeIcon} alt="" /><span>Detector</span></div></a>
            <a href='#'><div><img className='icon' src={GroupIcon} alt="" /><span>Grupos</span></div></a>
            <a href='#'><div><img className='icon' src={AboutIcon} alt="" /><span>Sobre Nós</span></div></a>

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