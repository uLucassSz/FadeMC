import React, {useState} from 'react'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import './Loja.css'

export default function Loja() {
  const [activeButton, setActiveButton] = useState('VIPS');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <div>
        <Navbar />
        <div className="store container">
          <div className="store-filter">
            <div className="filters">
              <button className={activeButton === "VIPS" ? 'active' : ''} onClick={() => handleButtonClick('VIPS')}>VIPS</button>
              <button className={activeButton === "Especiais" ? 'active' : ''} onClick={() => handleButtonClick('Especiais')}>Especiais</button>
              <button className={activeButton === "Punições" ? 'active' : ''} onClick={() => handleButtonClick('Punições')}>Punições</button>
            </div>
          </div>

          <div className="store-container">
            <div className="store-box">
              <h5>PRO</h5>
              <span className="price">
                R$ 16,99 <small>/ 30 dias</small>
              </span>

              <div className='listBenefits'>Confira as vantagens:</div>
              <ul>
                <li><i className="bx bx-check"></i> Vantagem 1</li>
                <li><i className="bx bx-check"></i> Vantagem 2</li>
                <li><i className="bx bx-check"></i> Vantagem 3</li>
                <li><i className="bx bx-check"></i> Vantagem 4</li>
                <li><i className="bx bx-check"></i> Vantagem 5</li>
              </ul>

              <a href="#" className='btn-buy'>COMPRAR</a>
            </div>
            <div className="store-box destaque">
              <h5>FADE</h5>
              <span className="price">
                R$ 26,99 <small>/ 30 dias</small>
              </span>

              <div className='listBenefits'>Confira as vantagens:</div>
              <ul>
                <li><i className="bx bx-check"></i> Vantagem 1</li>
                <li><i className="bx bx-check"></i> Vantagem 2</li>
                <li><i className="bx bx-check"></i> Vantagem 3</li>
                <li><i className="bx bx-check"></i> Vantagem 4</li>
                <li><i className="bx bx-check"></i> Vantagem 5</li>
              </ul>

              <a href="#" className='btn-buy'>COMPRAR</a>
            </div>
            <div className="store-box">
              <h5>Beta</h5>
              <span className="price">
                R$ 79,99 <small>/ Eterno</small>
              </span>

              <div className='listBenefits'>Confira as vantagens:</div>
              <ul>
                <li><i className="bx bx-check"></i> Vantagem 1</li>
                <li><i className="bx bx-check"></i> Vantagem 2</li>
                <li><i className="bx bx-check"></i> Vantagem 3</li>
                <li><i className="bx bx-check"></i> Vantagem 4</li>
                <li><i className="bx bx-check"></i> Vantagem 5</li>
              </ul>

              <a href="#" className='btn-buy'>COMPRAR</a>
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}