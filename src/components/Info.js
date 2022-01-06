import React from 'react';
import Projects from './Projects.js';
import Contact from './Contact.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from '@mui/material';


import './Info.css';
function Info() {
    return (
        <div className='info__container'>
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
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}

export default Info
