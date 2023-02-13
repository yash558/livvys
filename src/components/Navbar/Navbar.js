import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid col-10 mx-auto">
                <a className="navbar-brand " href="/">
                    <img src={logo} alt="" height={50} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={50} duration={100}  className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={100} className='nav-link' >Features</Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" to="app-screenshots" spy={true} smooth={true} offset={50} duration={100} className='nav-link' >Screenshot</Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={50} duration={100} className='nav-link' >Testimonials</Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={100} className='nav-link' >Contact</Link>
                        </li>
                    </ul>

                    <div className="button">
                        <a href="/" className='mx-4'>Login</a>
                        <button className='sign-up '>Sign Up</button>
                    </div>
                </div>
            </div>

        </nav>

    )
}

export default Navbar