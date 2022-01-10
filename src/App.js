import React from "react";
import './App.css';
import Hero from './components/Hero.js';
import Info from './components/Info.js';
import Footer from './components/Footer.js';
import Particles from "react-tsparticles";



export default function App() {
  
  
  return (
        <div className="page__container">
          <div>
            <Particles id="tsparticles"
            options={{
              background: {
                color: {
                  value: '#8f5dde',
                },
              },
              fpsLimit: 30,
              
              particles: {
                color: {
                  value: ["#ffffff", '#5bc0eb', '#9bc53d', '#e55934', '#fa7921'],
                },
                
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 5,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 70,
                },
              },
              detectRetina: true,
            }}/> 
          </div>
          <div className="content__container__test"> 
          <Hero></Hero>        
          <Info></Info>
          <Footer></Footer>
          </div>
        </div>
    
  );
}