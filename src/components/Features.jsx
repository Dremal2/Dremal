import React from 'react';
import '../styles/Features.css';
import FeaturesIcon1 from '../assets/images/project.png';
import FeaturesIcon2 from '../assets/images/stocks.png';
import FeaturesIcon3 from '../assets/images/together.png';
import Meetingss from '../assets/images/diploma.webp';
const Features = () => {
  return <section className='features'>
    <h1 className='features-title'>Функции 
    </h1>
    <h2 className='features-subtitle'>Большинство сайтов предназначены для повседневного использования Leko создан для бизнеса и не только</h2>
    <div className='features-grid'>
        <div className='featured-grid-item'>
            <img src={FeaturesIcon2} alt="" />
            <h2 className='features-grid-item-title'> Наши возможности</h2>
            <p className='features-grid-item-parahraph'>
                LEKO поможет вам создать сайт и двигаться только вверх по карьерной лестнице!
            </p>
        </div>
        <div className='featured-grid-item'>
            <img src={FeaturesIcon1} alt="" />
            <h2 className='features-grid-item-title'> Наши проекты</h2>
            <p className='features-grid-item-parahraph'>
                LEKO поможет вам создать сайт и двигаться только вверх по карьерной лестнице!
            </p>
        </div>
        <div className='featured-grid-item'>
            <img src={FeaturesIcon3} alt="" />
            <h2 className='features-grid-item-title'> Расти вместе с нами!</h2>
            <p className='features-grid-item-parahraph'>
                LEKO поможет вам создать сайт и двигаться только вверх по карьерной лестнице!
            </p>
        </div>
    </div>
    <div className='features-meetings-img-wrapper'>
        <img src={Meetingss} alt="Собрание" className='features-meetings-image'/>
    </div>
  </section>;

}

export default Features