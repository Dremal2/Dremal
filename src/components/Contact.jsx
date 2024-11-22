import React from 'react'
import '../styles/Contact.css'
import Map from '../assets/images/map.png'
import Telephone from '../assets/images/telephone.png'
import Mail from '../assets/images/mail.png'
import X from '../assets/images/x.png'
import Youtube from '../assets/images/youtubee.png'
import Vkontakte from '../assets/images/vk.png'
import Telegram from '../assets/images/telegram.png'

const Contact = () => {
  return (
    <section className='contact'> 
        <h1 className='contact-title'>
            Связаться с нами
        </h1>
        <h2 className='contact-subtitle'>
            Большинство сайтов предназначены для бизнеса. LEKO создан для бизнеса  
        </h2>
        <div className='contact-grid'>
            <div>
                <form className='contact-grid-item-form'>
                <h2 className='contact-form-title'>Напиши нам</h2>
                <input type="text" placeholder='Ваше имя' className='contact-form-input'/>
                <input type="text" placeholder='Ваш Email' className='contact-form-input'/>
                <textarea type="text" placeholder='Ваше сообщение' className='contact-form-textarea'/>
                <a href='#'><button className='contact-form-button'>Отправить сообщение</button></a>
            </form>
            </div>
            <div>
                <div className='contact-grid-item'>
                    <div className='contact-row-1'>
                        <div className='contact-row-1-child'>
                            <img src={Map} alt="" className='contact-row-1-child-img'/>
                            <p className='contact-row-1-child-paragraph'>Москва, Центральный административный округ, Пресненский район, Московский международный деловой центр Москва-Сити, многофункциональный комплекс Око</p>
                        </div>
                    </div>
                    <div className='contact-row-1'>
                        <div className='contact-row-1-child'>
                            <img src={Telephone} alt="" className='contact-row-1-child-img'/>
                            <p className='contact-row-1-child-paragraph'>+7999999999</p>
                        </div>
                    </div>
                    <div className='contact-row-1'>
                        <div className='contact-row-1-child'>
                            <img src={Mail} alt="" className='contact-row-1-child-img'/>
                            <p className='contact-row-1-child-paragraph'> pikovskii00@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='contact-row2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.4834243904643!2d37.5372925736952!3d55.74807976719618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdcf5d62e07%3A0xdfc7973a8a654cb4!2z0JzQvtGB0LrQvtGDINCh0LjRgtC4LCDQntC-0L4!5e0!3m2!1sru!2sru!4v1731923615947!5m2!1sru!2sru" width="600" height="450" style={{ border: 0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='contact-row-2-iframe'></iframe>
                </div>
                <div className='contact-social-media-icons'>
                    <img src={Vkontakte} alt="" className='contact-social-icon-img'/>
                    <img src={Youtube} alt="" className='contact-social-icon-img'/>
                    <img src={Telegram} alt=""className='contact-social-icon-img' />
                    <img src={X} alt="" className='contact-social-icon-img'/>
                </div>
            </div>
        </div>
    </section>
   )
}

export default Contact