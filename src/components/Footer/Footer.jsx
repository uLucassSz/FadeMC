import React from 'react'
import { Link, redirect } from 'react-router-dom'

import './Footer.css'

import X from '../../assets/x.png'

export default function Footer() {

    function redirectDiscord() {
        window.location.href = "https://discord.gg/n7ZdfGgqmw"
    }
    function redirectTwitter() {
        window.location.href = "https://x.com/"
    }


  return (
    <>
        <footer>
            <div className='header container'>
                <div className="link-actions">
                    <ul>
                        <li>
                            <Link to="/forum">Fórum</Link>
                        </li>
                        <li>
                            <Link to="/loja">Loja</Link>
                        </li>
                        <li>
                            <Link to="/jogar">Jogar</Link>
                        </li>
                        <li>
                            <Link to="/equipe">Equipe</Link>
                        </li>
                    </ul>
                </div>
                <div className="socials">

                    <i onClick={() => redirectDiscord()} class='bx bxl-discord-alt discord'></i>

                    <img onClick={() => redirectTwitter()} src={X} alt="" />
                </div>
            </div>
            <div className="line"></div>
            <p>© FadeMC - Todos os direitos reservados, 2019-2023</p>
        </footer>
    </>
  )
}