import React, { useState } from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar';

import bannerTopic from '../../assets/banner-topic.png'
import Footer from '../../components/Footer/Footer';

export default function Home() {

  const [copied, setCopied] = useState(false);
  const originalText = "fademc.com.br";

  const handleCopyClick = () => {
    const copyText = document.createElement('input');
    copyText.value = originalText;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000)
  }

  return (
    <>
      <Navbar />
      
      <div className='carrousel'> 
        <div className="carrousel-container">
          <div className='carrousel-slide'>
            <div className='content'>
              <h4>PROMOÇÃO!</h4>
              <p>Desfrute de um desconto imperdível de até 25% no VIP Fade</p>
              <a href="https://google.com" className='btn'>Acessar loja</a>
            </div>
          </div>
        </div>

        <div className="carrousel-pagination">
          <div className='circle active'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      </div>

      <div className="home-container container">
        <div className="left-container">
          <div className="recent-topic">
            <div className="author">
              <img src="https://minotar.net/helm/uLucassSz/45.png" className='authorImg' alt="authorImg" />
              <div>
                <div className="posted">Postado por <span className='authorName'>uLucassSz</span></div>
                <div className="date">Hoje, às 10:34</div>
              </div>
            </div>

            <img src={bannerTopic} className='bannerTopic' alt="" />

            <div className="topicContent">
              <h5 className="titleTopic">FadeMC - Como ingressar à equipe</h5>
              <p>Olá jogadores(as)! <div className="break"></div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed neque ornare, molestie mauris ac, ullamcorper mi. Donec sit amet urna congue sem venenatis commodo. Donec ac dignissim ante, vel ornare nibh. Nullam ut dapibus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sit amet risus metus. Vestibulum vehicula felis dapibus, fringilla nisi id.</p>

              <div className="readMore">
                <a href="#" className='btn'>Ler mais</a>
              </div>
            </div>
          </div>
          <div className="recent-topic">
            <div className="author">
              <img src="https://minotar.net/helm/uLucassSz/45.png" alt="authorImg" />
              <div>
                <div className="posted">Postado por <span className='authorName'>uLucassSz</span></div>
                <div className="date">Hoje, às 10:34</div>
              </div>
            </div>

            <img src={bannerTopic} className='bannerTopic' alt="" />

            <div className="topicContent">
              <h5 className="titleTopic">FadeMC - Como ingressar à equipe</h5>
              <p>Olá jogadores(as)! <div className="break"></div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed neque ornare, molestie mauris ac, ullamcorper mi. Donec sit amet urna congue sem venenatis commodo. Donec ac dignissim ante, vel ornare nibh. Nullam ut dapibus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sit amet risus metus. Vestibulum vehicula felis dapibus, fringilla nisi id.</p>

              <div className="readMore">
                <a href="#" className='btn'>Ler mais</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-box ip">
            <h4 className="title">Endereço de IP</h4>
            <span onClick={handleCopyClick} className="copyIP">{copied ? 'Copiado!' : originalText}</span>
            <p>Nosso servidor é compatível com as versões 1.7 a 1.16</p>
          </div>
            <iframe src="https://discord.com/widget?id=1092200879286923397&theme=dark" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>

      <Footer />
    </>
  )
}