import React from 'react';
import './Hero.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../images/logo.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {IconButton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from '../files/resume.pdf';

function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero__content'>
                <Navbar>
                    <Nav className="me-auto">
                    <Navbar.Brand><img src={logo} width="50" height="50"/></Navbar.Brand>
                    </Nav>
                    <Nav className="me-auto" className="ml-auto">
                        <Nav.Link>
                            <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={300}
                            >Projects</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={300}
                            >Contact</Link>
                        </Nav.Link>
                        <Nav.Link href={resume} target="_blank">
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <div className='hero__text'>
                <h1 className='hero__text__name'>Digen Gill</h1>
                <h5 className='hero__text__description'>software engineering <br></br>@ yorku</h5><br></br>
                <div className="social__links">
                        <IconButton className="github__btn" color='inherit'  onClick={() => {window.open(
                        'https://github.com/digengill',
                        '_blank' // <- This is what makes it open in a new window.
                        );}} target="_blank" aria-label="github" >
                            <GitHubIcon className="github__btn" fontSize="large"></GitHubIcon>
                        </IconButton>
                        <IconButton className="linkedin_btn" color='inherit'   onClick={() => {window.open(
                        'https://www.linkedin.com/in/digengill/',
                        '_blank' // <- This is what makes it open in a new window.
                        );}} target="_blank" aria-label="linkedin">
                            <LinkedInIcon fontSize="large"></LinkedInIcon>
                        </IconButton>
            </div>
                </div>
                <div className='hero__down__arrow'>
                <Link activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={300}>
                    <IconButton>
                        <ArrowDownwardIcon fontSize='large'/>
                    </IconButton>
                </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Hero
