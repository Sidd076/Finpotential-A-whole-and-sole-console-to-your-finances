import React from 'react';
import Navbar from '../navbar/navbar';
import About from './about';
import Banner from './banner';
import Services from './services';
import Features from './features';
import './home.css';
import Testomonial from './testimonial';
import Footer from './footer';


function Home() {
    return (
        <div className="home">
               <Navbar/>
               <Banner/>
               <About/>
               <Features/>
               <Services/>
               <Testomonial/>
               <Footer/> 
               

        </div>

    );
}

export default Home;