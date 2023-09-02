import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'
import { Link, useLocation } from "react-router-dom";

import Logo from '../../assets/logo.png';

import 'boxicons/css/boxicons.min.css';

export default function Navbar() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const dropDownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
      function handleClickOutside(event) {
          if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
              setIsDropDownActive(false);
          }
      }

      document.addEventListener('click', handleClickOutside);

      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, []);

  return (
    <>
    
    <header>
        <div className='content container'>
          <div className='online'>
            <span>1.789</span>
            <p>jogadores online</p>
          </div>
          <img src={Logo} alt="" />
          <div className='profile'>
            <img src="https://minotar.net/helm/uLucassSz/38.png" className='userImg' alt="profile-user" />
            <span className='userName'>uLucassSz</span>
          </div>
        </div>
    </header>

    <nav>
        <ul className='navbar container'>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/loja' ? 'active' : ''}>
            <Link to="/loja">Loja</Link>
          </li>
          <li className={location.pathname === '/forum' ? 'active' : ''}>
            <Link to="/forum">Fórum</Link>
          </li>
          <li className={location.pathname === '/jogar' ? 'active' : ''}>
            <Link to="/jogar">Jogar</Link>
          </li>
          <li onClick={() => setIsDropDownActive(!isDropDownActive)} className='dropDown' ref={dropDownRef}>
            <span>Mais <i className='bx bx-chevron-down'></i></span>

            <div className={`dropDown-wrapper ${isDropDownActive ? 'active' : ''}`}>
              <ul>
                <li>
                <Link to="/punicoes">Punições</Link>
                </li>
                <hr />
                <li>
                <Link to="/equipe">Equipe</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
    </nav>    
    </>
  );
}
