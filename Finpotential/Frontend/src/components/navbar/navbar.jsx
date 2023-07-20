import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';




        
function Navbar() {

  const logout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("loglevel")
    navigate(`/`)
  }
  const navigate = useNavigate()

  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <img className="logo" src="logo.png" alt="" style={{width: "100px"}} />
      <ul className="links">
        <li><a href='#'>HOME</a></li>
        <li><a href="/aboutus">ABOUT US </a></li>
        <li><a href="http://localhost:8501/">STOCKS</a></li>
        <li><a href="/blog">BLOG</a></li>
        <div className="banner-btn-n">
          <button onClick={logout} className='logout'>Logout</button>
        </div>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
}

export default Navbar;






