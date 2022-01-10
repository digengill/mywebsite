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
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}

export default Info
