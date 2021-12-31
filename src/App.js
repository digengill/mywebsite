import React from "react";
import {HashRouter as Router,Route, Link, Routes} from 'react-router-dom';

import './App.css';
import Hero from './components/Hero.js';
import Info from './components/Info.js';
import Footer from './components/Footer.js';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
//sd
//https://www.youtube.com/watch?v=d34GsFz-HkY   Parallax Design
//https://www.youtube.com/watch?v=QfLI4BoXglA

// HOver Effects https://www.youtube.com/watch?v=XZZ9DaG4ZvE
// ** https://www.youtube.com/watch?v=ltxxNidblts
//             <Navbar.Brand><Typography variant="h6">GILL</Typography></Navbar.Brand>


export default function App() {
  
  
  return (
      <div className="page__container">
      
      <Hero></Hero>        
      <Info></Info>
      <Footer></Footer>
      </div>

    
  );
}