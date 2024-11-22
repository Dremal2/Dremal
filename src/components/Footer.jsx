import React from 'react';
import '../styles/Footer.css';
 
import Map from '../assets/images/map.png'
import Telephone from '../assets/images/telephone.png'
import X from '../assets/images/x.png'
import Youtube from '../assets/images/youtubee.png'
import Vkontakte from '../assets/images/vk.png'
import Telegram from '../assets/images/telegram.png'

const Footer = () => {
  return  (
  <footer className='footer'>
    <div className='container-footer'>
      <ul className='footer-ul'>
        <li className='footer-li'>Страницы</li>
        <li className='footer-li'>Главная</li>
        <li className='footer-li'>Продукты</li>
        <li className='footer-li'>Цены</li>
        <li className='footer-li'>О нас</li>
        <li className='footer-li'>Контакты</li>
      </ul>
      <ul className='footer-ul'>
        <li className='footer-li'>Tomothy</li>
        <li className='footer-li'>Eleanor Edwards</li>
        <li className='footer-li'>Ted Robertson</li>
        <li className='footer-li'>Jennie Mckinney</li>
        <li className='footer-li'>Gloria Richards</li>
        <li className='footer-li'>Annte Russill</li>
      </ul>
      <ul className='footer-ul'>
        <li className='footer-li'>Jane Black</li>
        <li className='footer-li'>Eleanor Edwards</li>
        <li className='footer-li'>Ted Robertson</li>
        <li className='footer-li'>Jennie Mckinney</li>
        <li className='footer-li'>Gloria Richards</li>
        <li className='footer-li'>Annte Russill</li>
      </ul>
    </div>
    <div className='footer-aside'>
      <div className='footer-icon-wrapper'>
        <img src={Map} alt="" />
        <p className=''>7480 Mockingbird Hill GA</p>
      </div>
      <div className='footer-icon-wrapper'>
        <img src={Telephone} alt="" />
        <p>+7999999999</p>
      </div>  
      <div className='footer-social-icons'>
        <img src={X} alt="" />
        <img src={Vkontakte} alt="" />
        <img src={Telegram} alt="" />
        <img src={Youtube} alt="" />
      </div>
    </div>
  </footer>
  )
};


export default Footer; 