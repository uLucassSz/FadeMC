import React from 'react'

import './Jogar.css'

import none from '../../assets/vazio.png';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Jogar() {
  return (
    <>
      <Navbar />
      <div className="pagePlay container">
        <div className="left-container">
          <div className="profile-card">
            <img src="https://minotar.net/helm/Jacinto/145.png" className='profileImg' alt="profileImg" />
            <div className="name">
              <span>Jacinto</span>
              <div className="level">
                <span>6</span>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <span>Partidas:</span>
                <p>12</p>
              </div>
              <div className="stat">
                <span>Vitórias:</span>
                <p>6</p>
              </div>
              <div className="stat">
                <span>Derrotas:</span>
                <p>6</p>
              </div>
              <div className="stat">
                <span>Abates:</span>
                <p>3</p>
              </div>
              <div className="stat">
                <span>Mortes:</span>
                <p>8</p>
              </div>
              <div className="stat">
                <span>KDR:</span>
                <p>0.26</p>
              </div>
            </div>

          </div>
        </div>

        <div className="right-container">
          <div className="card-actions">
            <div className="search">
              <h6>Pesquisar salas</h6>
              <input type="text" placeholder='Digite o nome do jogador' />
            </div>
            <button className='createLobby'>
              <i className="bx bxs-plus-circle"></i>
              Criar lobby
            </button>
          </div>

          <div className="play-container">
            <div className="play">
              <div className="level levelTotal eightNine">
                <span>9</span>
              </div>
              <img src="https://minotar.net/helm/uLucassSz/65.png" alt="" className="ownerImg" />
              <span className='playName'>Sala - uLucassSz</span>

              <div className="players">
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level rainbow">
                    <span>10</span>
                  </div>
                </div>
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level rainbow">
                    <span>10</span>
                  </div>
                </div>
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level rainbow">
                    <span>10</span>
                  </div>
                </div>
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level fiveSeven">
                    <span>6</span>
                  </div>
                </div>
                <div className="player">
                  <img src={none} className='playerImg' alt="" />
                </div>
              </div>

              <button className='btnJoin'>
                <i className="bx bxs-door-open"></i>
                Entrar
              </button>
            </div>
            <div className="play">
              <div className="level levelTotal eightNine">
                <span>9</span>
              </div>
              <img src="https://minotar.net/helm/uLucassSz/65.png" alt="" className="ownerImg" />
              <span className='playName'>Sala - uLucassSz</span>

              <div className="players">
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level rainbow">
                    <span>10</span>
                  </div>
                </div>
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level rainbow">
                    <span>10</span>
                  </div>
                </div>
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level rainbow">
                    <span>10</span>
                  </div>
                </div>
                <div className="player">
                  <img src="https://minotar.net/helm/uLucassSz/30.png" className='playerImg' alt="" />
                  <div className="level fiveSeven">
                    <span>6</span>
                  </div>
                </div>
                <div className="player">
                  <img src={none} className='playerImg' alt="" />
                </div>
              </div>

              <button className='btnJoin'>
                <i className="bx bxs-door-open"></i>
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}