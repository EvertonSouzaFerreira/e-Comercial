import React from 'react'
import { Link } from 'react-router-dom'

function MenuNav(props) {
  return (
    <nav>
        <ul className="menu-nav">
          <Link to='/'>
            <li>Collections</li>
          </Link>
          <li>Men</li>
          <li>Women</li>
          <Link to='/about'>
          <li>About</li>
          </Link>
          
          <li>Contact</li>
          <li onClick={props.handleLogin}>Login</li>
          <li onClick={props.hadleSinUp}>SinUp</li>
        </ul>
      </nav>
  )
}

export default MenuNav