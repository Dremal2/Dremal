import React, { useState } from 'react'
import '../styles/Header.css';
import Menu from "../assets/images/burgermenu.webp"
/* import Logo from "../assets/images/menu.png" */
import Logo from '../assets/images/ii.png'
/* import Maskot from "../assets/images/maskot-bezz.png"
 */import vkontakte from "../assets/images/vkontakte.svg"
import youtube from "../assets/images/youtube.svg"
import facebook from "../assets/images/facebook.svg"
import Close from "../assets/images/close.png"
import { motion } from "framer-motion"
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return ( 
    <header className='header'>
        <div className='header-menu-img-wrapper'>
            <img src={Menu} alt="Menu изображение" className='header-menu-img' onClick={() => setToggleMenu(true)} />
        </div>
        <nav className='header-nav'>
        <ul>
            <li>Главная</li>
            <li>Продукты</li>
            <li>Цены</li>
            <li>О нас</li>
        </ul>
    </nav> 
    
    <div>
        <img src={Logo} alt="Logo изображния сайта" className='header-logo'/>
    </div> 
    <div className='icons'>
        <a href="#"><img src={vkontakte} alt="Наш vk" /></a>
        <a href="#"><img src={youtube} alt="Наш youtube" /></a> 
        <a href="#"><img src={facebook} alt="Наш facebook"/></a>
    </div>
    {toggleMenu &&  (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 100}}
        transition={{duration: 0.3}}
        className='header-mobile'
        >
            <div>
                <img src={Close} alt="Close иконка" className='header-mobile-close-img' onClick={() => setToggleMenu(false)}/>
            </div>
            <nav>
                <ul className='header-mobile-ul'>
                    <a href="#"><button><li>Главная</li></button></a>
                    <a href="#"><button><li>Продукты</li></button></a>
                    <a href="#"><button><li>Цены</li></button></a>
                    <a href="#"><button><li>О нас</li></button></a>
                </ul>
            </nav>
            <div className='header-mobile-icons'>
                <a href='#'><img src={vkontakte} alt="Наш vk" /></a>
                <a href='#'><img src={youtube} alt="Наш youtube" /></a>
                <a href='#'><img src={facebook} alt="Наш facebook"/></a>    
            </div>
        </motion.div>
    )}
    </header>
    );   
};


export default Header
