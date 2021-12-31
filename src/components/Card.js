import React from 'react';
import './Card.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import {IconButton} from '@mui/material';


function Card({title, image_src, body, github_link, live_link}) {
    return (
        <div>
                    <div class="container">
                        <div class="card">
                            <div class="content">
                                <div class="imgBx">
                                    <img src={image_src}/>
                                </div>
                                <div class="contentBx">
                                    <h3>{title}<br/><span>{body}</span></h3>
                                </div>
                            </div><br/><br/>
                            <ul class="sci">
                                <li>   
                                    <IconButton className="github__btn" onClick={() => {{window.open(
                                    {github_link},
                                    '_blank' // <- This is what makes it open in a new window.
                                    );}}} target="_blank" aria-label="github">
                                    <GitHubIcon/>
                                    </IconButton>
                                </li>
                                { live_link != null &&
                                <li>
                                    <IconButton className="live__btn" onClick={() => {{window.open(
                                    {github_link},
                                    '_blank' // <- This is what makes it open in a new window.
                                    );}}} target="_blank" aria-label="live">
                                    <CodeIcon/>
                                    </IconButton>
                                </li>
                                }
                            </ul>
                        </div>
                    </div>
                    </div>

    )
}

export default Card
