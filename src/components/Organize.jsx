import React from 'react';
import "../styles/Organize.css";
import Mockup from '../assets/images/mockup.png'

const Organize = () => {
  return ( 
  <section className='organize'>
    <div>
        <h1 className='organize-title'>
            Самый быстрый способ организовать
        </h1>
        <h2 className='organize-subtitle'>
            Работу с сайтами для бизнеса и работы
        </h2>
    </div>
    <div className='mockup-img'>
        <img src={Mockup} alt="Mockup" />
    </div>
  </section>
  
    );
};

export default Organize