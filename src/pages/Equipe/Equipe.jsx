import React from 'react'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import './Equipe.css'

export default function Equipe() {
  return (
    <>
      <Navbar />
      <div className="heading">
        <h6 className="title">Conheça nossa equipe!</h6>
        <p>Nossa equipe é composta por Administradores, Moderadores e Triais. Cada membro desempenha um papel crucial para manter nosso servidor eficiente.</p>
      </div>

      <div className="staff-container container">
        <div className="staff-box">
          <div className="staff-header adm">Administrador <span>(4)</span></div>

          <div className="users">
            <div className="user">
              <img src="https://minotar.net/helm/gabriaum/65.png" alt="userImg" className='userImg' />
              <span className="userName">gabriaum</span>
            </div>
            <div className="user">
              <img src="https://minotar.net/helm/SpaceCraft_Games/65.png" alt="userImg" className='userImg' />
              <span className="userName">SpaceCraft_Games</span>
            </div>
            <div className="user">
              <img src="https://minotar.net/helm/Altered_Saber/65.png" alt="userImg" className='userImg' />
              <span className="userName">nooomy</span>
            </div>
            <div className="user">
              <img src="https://minotar.net/helm/uLucassSz/65.png" alt="userImg" className='userImg' />
              <span className="userName">uLucassSz</span>
            </div>
          </div>
        </div>
        <div className="staff-box">
          <div className="staff-header">Moderador Primário <span>(0)</span></div>

          <div className="users">
            <p className="notFound">Ainda não temos membros adicionados a este cargo.</p>
          </div>
        </div>
        <div className="staff-box">
          <div className="staff-header">Moderador Secundário <span>(0)</span></div>

          <div className="users">
            <p className="notFound">Ainda não temos membros adicionados a este cargo.</p>
          </div>
        </div>
        <div className="staff-box">
          <div className="staff-header">Trial Moderador <span>(0)</span></div>

          <div className="users">
            <p className="notFound">Ainda não temos membros adicionados a este cargo.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}