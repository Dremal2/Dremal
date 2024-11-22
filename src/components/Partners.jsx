import React from 'react'
import '../styles/Partners.css'
import Partners1 from '../assets/images/logoy.svg';
import Partners2 from '../assets/images/logo-coinbase.svg';

const Partners = () => {
  return (  
  <section className='partners'>
    <h1>Партнеры</h1>
    <h2>Большинство сайтов предназначены для команд <br/> LEKO создан для бизнеса</h2>
    <div className="partners-img-wrapper">
      <img src={Partners1} alt="Partner1" />
      <img src={Partners2} alt="Partner2" />
    </div>
  </section>
  )
}

export default Partners