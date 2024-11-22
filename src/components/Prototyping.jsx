import React from 'react'
import '../styles/Prototyping.css'
import ProtoImg from '../assets/images/maskot-bezz.png';
const Prototyping = () => {
  return (
    <section className='prototyping'>
        <div className='prototyping-item'>
            <img src={ProtoImg} alt=""  className='prototyping-img'/>
        </div>
        <div className='prototyping-item'>
            <p className='prototyping-paragraph-1'>
                Вы сможете достигать большего!
            </p>
                <h1 className='prototyping-title'>
                    Шикарное прототипироавние!
                </h1>
            <p className='prototyping-paragraph-2'>
               Подписывайтесь на нашу новостную рассылку 
            </p>
            <p className='prototyping-paragraph-3'>
                Доступны консультации 
            </p>
            <div className='prototyping-input-wrapper'>
                <input placeholder='Ваш email' className='prototyping-input'/>
                <button className='prototyping-button'>Подписаться</button>
            </div>
        </div>
    </section>
  )
}

export default Prototyping