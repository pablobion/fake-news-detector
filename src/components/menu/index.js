import React from 'react';

import { Menu } from './styles';

import FakeIcon from '../../assets/fakenewsicon.svg'
import GroupIcon from '../../assets/group.svg'
import AboutIcon from '../../assets/about.svg'

function MenuComponent() {
  return (
    <Menu>
      <div className='cell'>
        <img className='icon' src={FakeIcon} alt=""/>
        <p>Detector</p>
      </div>
      <div className='cell'>
      <img className='icon' src={GroupIcon} alt=""/>
        <p>Grupos</p>
      </div>
      <div className='cell'>
      <img className='icon' src={AboutIcon} alt=""/>
        <p>Sobre Nós</p>
      </div>
      
    </Menu>


  )
}

export default MenuComponent;