import React from 'react'
import { Link } from 'react-router-dom';
import './Compo.css'


const NavBar = () => {

  return (
    <nav>
      <center>
        <span className='span1'>The</span><p className='p2'>Siren</p>
        <div className='nav-hr'></div>
      </center>
      
      <div className='parent-div'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/category/bollywood' className='nav-link'>Bollywood</Link>
        <Link to='/category/technology' className='nav-link'>Technology</Link>
        <Link to='/category/hollywood' className='nav-link'>Hollywood</Link>
        <Link to='/category/fitness' className='nav-link'>Fitness</Link>
        <Link to='/category/food' className='nav-link'>Food</Link>
        <div id="indicator"></div>
      </div>

      <div className="nav">
        <nav className='slideNav' role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
          <ul id="menu">
            <li><Link className='a1' to='/'>Home</Link></li>
            <li><Link className='a1' to='/category/bollywood'>Bollywood</Link></li>
            <li><Link className='a1' to='/category/technology'>Technology</Link></li>
            <li><Link className='a1' to='/category/hollywood'>Hollywood</Link></li>
            <li><Link className='a1' to='/category/fitness'>Fitness</Link></li>
            <li><Link className='a1' to='/category/food'>Food</Link></li>
          </ul>
         </div>
        </nav>
        
        
      </div>

    </nav>
  )
}
export default NavBar;
