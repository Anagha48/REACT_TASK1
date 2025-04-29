import React from 'react';
import  {useState} from 'react';
// import './App.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
       <nav className='container'>
        <div className='logo'>
          <img src="/images/player.png" alt="logo" width={"60px"} height={"auto"}/>
          <a href="#" className='brand-name'>Kicks & Co.</a>
        </div>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="hover-fill-btn">Login</button>
        <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
