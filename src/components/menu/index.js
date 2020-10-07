import React from 'react';

import { Menu } from './styles';


import HomeIcon from '../../assets/home.svg'
import FakeIcon from '../../assets/fakenewsicon.svg'
import GroupIcon from '../../assets/group.svg'
import AboutIcon from '../../assets/about.svg'

function MenuComponent() {
  return (
    <>
      <Menu>
        <button>
        <div className='cell'>
          <img className='icon' src={HomeIcon} alt="" />
          <p>Inicio</p>
        </div>
        </button>
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
    </>

  )
}

export default MenuComponent;