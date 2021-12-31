import React from 'react'
import './Hero.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo.png'

function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero__content'>
                <Navbar>
                    <Nav className="me-auto">
                    <Navbar.Brand href="#home"><img src={logo} width="50" height="50"/></Navbar.Brand>
                    </Nav>
                    <Nav className="me-auto" className="ml-auto">
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#features">Contact</Nav.Link>
                        <Nav.Link href="#features">Resume</Nav.Link>
                    </Nav>
                </Navbar>
                <div className='hero__text'>
                <h1 className='hero__text__name'>Digen Gill</h1>
                <h5 className='hero__text__description'>software engineer</h5>

                </div>
            </div>
        </div>
    )
}

export default Hero
