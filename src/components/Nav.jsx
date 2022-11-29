import React from 'react'
import NavLogo from '../assets/nav.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={NavLogo} className='nav-logo'/>
      <h3 className='nav-name'> my travel journal.</h3>
    </div>
  )
}

export default Nav
