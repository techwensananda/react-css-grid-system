import React, { useEffect, useState } from 'react';
// import logo from '../assets/logo.png'
const Header = ({toggleCart}) => {
const[menuShow,setMenuShow]=useState(false)
const[isDarkTheme,setIsDarkTheme]=useState(true)

const toggleMenu=() => setMenuShow(prev=>!prev);

const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = useState(false);

//here 96(px) - height of current header

useEffect(() => {
    const handleScroll = () => {
        setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
},[])

const handleDarkTheme=()=>{
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    setIsDarkTheme(true)

  }else{
    document.body.classList.add('dark-theme');
    setIsDarkTheme(false)

  }
}




  return (
    <>
    
  



<header className={`header ${isScrollValueMoreThanHeaderHeight ? 'scroll-header' :''}`} id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <i className='bx bxs-watch nav__logo-icon'></i> Rolex
                </a>

                <div className={`nav__menu ${menuShow ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#featured" className="nav__link">Featured</a>
                        </li>
                        <li className="nav__item">
                            <a href="#products" className="nav__link">Products</a>
                        </li>
                        <li className="nav__item">
                            <a href="#new" className="nav__link">New</a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <i className='bx bx-x' ></i>
                    </div>
                </div>

                <div className="nav__btns">
              
                    <i className={`bx ${isDarkTheme ? 'bx-moon':'bx-sun'} change-theme`} id="theme-button" onClick={handleDarkTheme}></i>

                    <div className="nav__shop" id="cart-shop" onClick={toggleCart}>
                        <i className='bx bx-shopping-bag' ></i>
                    </div>

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className='bx bx-grid-alt' ></i>
                    </div>
                </div>
            </nav>
        </header>

    </>
  )
}

export default Header