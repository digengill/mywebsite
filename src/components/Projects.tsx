import React from 'react'
import Breaker from './Breaker'
import handwriting_img from '../images/writing.png'
import os_img from '../images/os.png'
import covid_img from '../images/covid-19.jpeg'
import pid_img from '../images/Arduino_Car_Balancer_PID_Controller.gif'
import talkbox_img from '../images/talkbox.png'
import console_img from '../images/console.png'
import jolt_img from '../images/jolt.png'

const project_info = [
    {
        name: 'Covid-19 Stat Tracker',
        body: 'The Covid tracker is a webpage application which shows the latest statistics of Covid cases, recoveries, and deaths.',
        image_src: covid_img,
        github_link: 'https://github.com/digengill/covid-tracker-app',
        live_link: 'https://covid-tracker-a309c.web.app/',
    },
    {
        name: 'ConsoleTracker',
        body: 'A lightweight web application which allows admins to control console stations & arcades in a Gaming Cafe.',
        image_src: console_img,
        github_link: 'https://github.com/ENG4000-Team-A/capstone-project',
        live_link: null,
    },
    {
        name: 'Toy-Car Balancer PID Controller',
        body: 'A bridge balances a toy car in the middle of the bridge, controlled by a mini servo motor and feedback is measured using sensors.',
        image_src: pid_img,
        github_link:
            'https://github.com/digengill/arduino-projects/tree/main/pid-car-balancer',
        live_link: 'https://youtu.be/hz2FInOl7EM',
    },
    {
        name: 'Handwriting \nRecognition Model',
        body: 'A Convolutional Recurrent Neural Network trained to recognize words character-by-character.',
        image_src: handwriting_img,
        github_link:
            'https://github.com/digengill/keras-ctc_loss-handwriting_recogintion',
        live_link: null,
    },

    {
        name: 'OS-from-Scratch',
        body: 'An operating system written from scratch C and x86 assembly.\n\n\n',
        image_src: os_img,
        github_link: 'https://github.com/digengill/os-from-scratch',
        live_link: null,
    },
    {
        name: 'TalkBox App',
        body: 'An application which aids users with disability to communicate.\n\n\n',
        image_src: talkbox_img,
        github_link: 'https://github.com/digengill/2311Project',
        live_link: null,
    },
]

function Projects() {
    return (
        <div>
            <Breaker />
            <div className="w-screen h-screen/70 bg-cover bg-center flex flex-col justify-evenly items-center p-10">
                <h3 className="text-lg font-mono font-medium text-lime-400 dark:text-white pb-5">
                    Covid Data Visualization
                </h3>
                <img src={covid_img} className="object-scale-down size-9/12 pb-5" />
                <p className="text-purple-300 font-mono pb-5">
                    {project_info[0].body}
                </p>
                <div>
                    <a
                        href="https://covid-tracker-a309c.web.app/"
                        target="_blank"
                    >
                        <button className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Go to Website
                        </button>
                    </a>
                    <a
                        href="https://github.com/digengill/covid-tracker-app"
                        target="_blank"
                    >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Github
                        </button>
                    </a>
                </div>
            </div>
            <Breaker />
            <div className="w-screen h-screen/70 bg-cover bg-center grid grid-cols-3 p-10">
                <div className=" col-span-1 flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg font-mono font-medium text-lime-400 dark:text-white pb-10">
                        JOLT JSON Transformation
                    </h3>
                    <p className="text-purple-300 font-mono pb-10">
                        JOLT Transformation is a json to json transformation
                        using the jolt specification.
                        <br /> This playground in an implementation of JOLT
                        Java Library.
                    </p>
                    <div>
                        <a
                            href="https://tools-by-ginny.vercel.app/jolt"
                            target="_blank"
                        >
                            <button className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Go to Website
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-2 flex justify-center align-middle items-center justify-items-center">
                    <img src={jolt_img} className="object-cover h-5/6" />
                </div>
            </div>
            <Breaker />
            <div className="w-screen h-screen/70 bg-cover bg-center grid grid-cols-2 p-10">
                <div className="col-span-1 flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg font-mono font-medium text-lime-400 dark:text-white pb-10">
                        Toy-Car Balancer PID Controller
                    </h3>
                    <p className="text-purple-300 font-mono">
                        A bridge balances a toy car in the middle of the bridge,
                        <br /> controlled by a mini servo motor and feedback is
                        measured using sensors.
                    </p>
                </div>
                <div className="col-span-1 flex flex-col justify-center justify-items-center items-center align-middle text-center">
                    <img
                        src={pid_img}
                        className="object-fill w-full h-68 mb-5"
                    />
                    <div>
                        <a href="https://youtu.be/hz2FInOl7EM" target="_blank">
                            <button className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Full Video
                            </button>
                        </a>
                        <a
                            href="https://github.com/digengill/arduino-projects/tree/main/pid-car-balancer"
                            target="_blank"
                        >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Github
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Breaker />
            <div className="w-screen h-screen/70 bg-cover bg-center grid grid-cols-2 p-10">
                <div className=" col-span-1 flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg font-mono font-medium text-lime-400 dark:text-white pb-10">
                        My OS
                    </h3>
                    <p className="text-purple-300 font-mono pb-10">
                        An operating system written from scratch C and x86
                        assembly.
                    </p>
                    <div>
                        <a
                            href="https://github.com/digengill/os-from-scratch"
                            target="_blank"
                        >
                            <button className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Github
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center align-middle items-center justify-items-center">
                    <img src={os_img} className="object-cover h-5/6" />
                </div>
            </div>
            <Breaker />
        </div>
    )
}

export default Projects
