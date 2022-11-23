import React, {useState} from 'react'
import {FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTimes} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import './NavBarStyles.css'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className={slide ? 'logo slide-right': 'logo'}>
                    <h3>Fayyad Zahid</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Travels</a></li>
                    <li><a href="/">Experience</a></li>
                    <li><a href="/">Education</a></li>

                    <div className='mobile-menu'>
                        <button>Social Media</button>
                        <button>Contact Me</button>
                        <div className="social-icons">
                            <FaFacebook className='icon'/>
                            <FaInstagram className='icon'/>
                            <FaLinkedin className='icon'/>
                        </div>
                    </div>
                </ul>

                <ul className="nav-menu hide">
                    <li><a href='/'>Social Media</a></li>
                    <li><a href='/'>Get in Touch</a></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {nav ? (<FaTimes size={20} style={{color: '#ffffff'}}/>): (<FaBars size={20} style={{color: '#ffffff'}}/>)}
                </div>
            </div>
        </div>
    )
}

export default NavBar