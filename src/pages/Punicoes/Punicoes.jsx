import React from 'react';
import './Punicoes.css';

import statsImg from '../../assets/stats.png';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Punicoes() {
  return (
    <>
        <Navbar />
        <div className="punicoesPage container">
          <div className="punicoesContainer">
            <div className="left-container">
              <div className="punicoesBox">
                <div className="punicaoHeader">
                  <span>Histórico de punições - <p>uLucassSz</p> </span>
                </div>
                <div className="punicaoContainer">
                  <details className="punicaoBox search">
                    <summary>
                      <img src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi banido 
                              <span>permanente</span>
                              por <span>Hack</span>
                          </p>
                      </div>
                    </summary>
                    <div className="punicaoDetails">
                      <div className="date">
                        <p>Data de aplicação: <span>20 de agosto de 2023, às 09:21</span></p>
                        <p>Expira em: <span>Permanente</span></p>
                      </div>
                      <p>Status: <span>Ativo</span></p>
                    </div>
                  </details>
                  <details className="punicaoBox search">
                    <summary>
                      <img src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi silenciado 
                              <span>permanente</span>
                              por <span>Racismo</span>
                          </p>
                      </div>
                    </summary>
                    <div className="punicaoDetails">
                      <div className="date">
                        <p>Data de aplicação: <span>20 de agosto de 2023, às 20:10</span></p>
                        <p>Expira em: <span>Permanente</span></p>
                      </div>
                      <p>Status: <span>Revogado</span></p>
                    </div>
                  </details>
                  <details className="punicaoBox search">
                    <summary>
                      <img src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi silenciado por
                              <span>2 horas</span>
                              por <span>Ofensa a jogador</span>
                          </p>
                      </div>
                    </summary>
                    <div className="punicaoDetails">
                      <div className="date">
                        <p>Data de aplicação: <span>20 de agosto de 2023, às 10:30</span></p>
                        <p>Expira em: <span>22 de agosto de 2023, às 12:30</span></p>
                      </div>
                      <p>Status: <span>Revogado</span></p>
                    </div>
                  </details>
                </div>
              </div>
              <div className="punicoesBox">
                <div className="punicaoHeader">
                  <span>Punições - <p> 27 Ago. 2023</p> </span>
                  <span><p>190</p> punições aplicadas</span>
                </div>
                <div className="punicaoContainer">
                  <div className="punicaoBox">
                      <div className="time">
                        <i className="bx bx-time-five"></i>
                        <span>10:30</span>
                      </div>
                      <img style={{marginLeft: '5px'}} src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi banido 
                              <span>permanente</span>
                              por <span>Hack</span>
                          </p>
                      </div>
                  </div>
                  <div className="punicaoBox">
                      <div className="time">
                        <i className="bx bx-time-five"></i>
                        <span>10:30</span>
                      </div>
                      <img style={{marginLeft: '5px'}} src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi banido por
                              <span>2 horas</span>
                              por <span>Skin inapropriada</span>
                          </p>
                      </div>
                  </div>
                  <div className="punicaoBox">
                      <div className="time">
                        <i className="bx bx-time-five"></i>
                        <span>10:30</span>
                      </div>
                      <img style={{marginLeft: '5px'}} src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi silenciado 
                              <span>permanente</span>
                              por <span>Racismo</span>
                          </p>
                      </div>
                  </div>
                  <div className="punicaoBox">
                      <div className="time">
                        <i className="bx bx-time-five"></i>
                        <span>10:30</span>
                      </div>
                      <img style={{marginLeft: '5px'}} src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi silenciado por
                              <span>2 horas</span>
                              por <span>Ofensa</span>
                          </p>
                      </div>
                  </div>
                  <div className="punicaoBox">
                      <div className="time">
                        <i className="bx bx-time-five"></i>
                        <span>10:30</span>
                      </div>
                      <img style={{marginLeft: '5px'}} src="https://minotar.net/helm/uLucassSz/45.png" alt="" />
                      <div className="details">
                          <p>
                            <span>uLucassSz</span>
                             foi expulso por <span>Anti-Jogo</span>
                          </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-container">
              <div className="right-box">
                <h4>Pesquisar jogador</h4>
                <input type="text" placeholder="Digite o nickname do jogador" />
              </div>
              <div className="right-box">
                <img src={statsImg} />
                <h4>ESTATÍSTICAS</h4>
                <div className="punicoesStats">
                  <div className="punicoesStat">
                    <span>Total:</span>
                    <p>10.392</p>
                  </div>
                  <div className="punicoesStat">
                    <span>Ano:</span>
                    <p>10.392</p>
                  </div>
                  <div className="punicoesStat">
                    <span>Mês:</span>
                    <p>2.194</p>
                  </div>
                  <div className="punicoesStat">
                    <span>Semana:</span>
                    <p>194</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}