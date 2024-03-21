import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar5.css';


const Menu = ({ title, classProps }) => {
    const getClassByTitle = function(title){
        switch (title.toLowerCase()){
            case 'home':
                return 'home'
            case 'whatisgpt3':
                return 'whatisgpt3'
            case 'open ai':
                return 'features'
            case 'case studies':
                return 'possibilities'
            case 'library':
                return 'blog'
            default :
                return ''
        }
    }
    const additionalClassProps = getClassByTitle(title)
    return(
        <div className={`${classProps}`}>
        <p><a href={`#${additionalClassProps}`}>{title}</a></p>
        </div>
    )
}

const Navbar5 = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const closeMenu = () => (
        setToggleMenu(false)
    )
    const openMenu = () => (
        setToggleMenu(true)
    )

    return (
    <div className='navbar' id='#home'>
        <div className='navbar__links'>
            <div className='navbar__links-logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='navbar__links-container'>
               <p>
                 {['Home', 'WhatisGPT3', 'Open Ai', 'Case Studies', 'Library'].map((item, index) => (
                    <Menu title={item} key={item + index} classProps={'classPropsStyle'}/>
                    ))}
               </p>
            </div>
        </div>
        <div className='navbar__sign'>
            <p>Sign in</p>
            <button onClick={''}>Sign up</button>
        </div>
        <div className='navbar__menu'>
            {toggleMenu
            ? <RiCloseLine onClick={closeMenu} size={27} color='#fff'/> 
            : <RiMenu3Line onClick={openMenu} size={27} color='#fff'/>}
            {toggleMenu && (
            <div className='navbar__menu-container scale-up-center'>
                <div className='navbar__menu-container-links'>
                    <ul>
                        {['Home', 'WhatisGPT3', 'Open Ai', 'Case Studies', 'Library'].map((item, index) => (
                            <Menu title={item} classProps={""} key={item + index} />
                            ))}
                    </ul>
                    <div className='navbar__menu-container-links-sign'>
                        <p>Sign in</p>
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
            )}
        </div>
      </div>
    );
}

export default Navbar5;


