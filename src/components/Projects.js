import React from 'react';
import './Projects.css';
import handwriting_img from '../images/writing.png';
import os_img from '../images/os.png';
import covid_img from '../images/covid-19.png';
import pid_img from '../images/pid.png';


import Card from './Card.js';

const project_info = [
    {
       name : "Handwriting \nRecognition Model",
       body : "A Convolutional Recurrent Neural Network trained to recognize words character-by-character.",
       image_src : handwriting_img,
       github_link : "https://github.com/digengill/keras-ctc_loss-handwriting_recogintion",
       live_link : null ,

   },

    {
       name : "OS-from-Scratch",
       body : "An operating system written from scratch C and x86 assembly.\n\n\n",
       image_src : os_img,
       github_link : "https://github.com/digengill/os-from-scratch",
       live_link : null,
       
   },
   {
       name : "TalkBox App",
       body : "An application which aids users with disability to communicate.\n\n\n",
       image_src : "https://image.flaticon.com/icons/png/256/4213/4213732.png",
       github_link : "https://github.com/digengill/2311Project",
       live_link : null,
       
   },
   
{
   name : "Covid-19 Stat Tracker",
   body : "The Covid tracker is a webpage application which shows the latest statistics of Covid cases, recoveries, and deaths.",
   image_src : covid_img,
   github_link : "https://github.com/digengill/covid-tracker-app",
   live_link : "https://covid-tracker-a309c.web.app/" ,
},
{
   name : "Toy-Car Balancer PID Controller",
   body : "A bridge balances a toy car in the middle of the bridge, controlled by a mini servo motor and feedback is measured using sensors.",
   image_src : pid_img,
   github_link : "https://github.com/digengill/arduino-projects/tree/main/pid-car-balancer",
   live_link : "https://youtu.be/hz2FInOl7EM" ,
}
]



function Projects() {


    
    return (
        <div className='projects__container'>
            {project_info.map((project) =>  
            (<Card title={project.name} image_src={project.image_src} body={project.body} github_link={project.github_link} live_link={project.live_link}></Card>))}
        </div>
    )
}

export default Projects
