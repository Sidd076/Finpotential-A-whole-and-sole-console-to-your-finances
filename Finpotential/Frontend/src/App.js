import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Home from './components/home/home';
import Connect from './components/connect/connect';
import Si from './components/si/si';
import Ci from './components/ci/ci';
import Sip from './components/sip/sip';
import Mf from './components/mf/mf';
import Blog from './components/blog/blog';
import About from './components/home/about';
import Services from './components/home/services';
import Features from './components/home/features';
import Testomonial from './components/home/testimonial';
import Funds from './components/funds/funds';
import Privacy from './components/privacy/privacy';
import FAQPage from './components/faq/faq';
import Finance from './components/finance/finance';
import Deposit from './components/deposit/deposit';
import Insurance from './components/insurance/insurance';
import AboutUs from './components/aboutus/aboutus';
import Tax from './components/tax/tax';
import Navbar from './components/navbar/navbar';
import Policy from './components/policy/policy';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/si" element={<Si />} />
          <Route path="/Ci" element={<Ci />} />
          <Route path="/Sip" element={<Sip />} />
          <Route path="/Mf" element={<Mf />} />
          <Route path="/Blog" element={<Blog />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Services" element={<Services />} /> 
          <Route path="/Features" element={<Features />} /> 
          <Route path="/Testimonial" element={<Testomonial />} />
          <Route path="/Funds" element={<Funds />} />
          <Route path="/Privacy" element={<Privacy />} />    
          <Route path="/faq" element={<FAQPage/>} />  
          <Route path="/finance" element={<Finance/>} />  
          <Route path="/deposit" element={<Deposit/>} />  
          <Route path="/insurance" element={<Insurance/>} />  
          <Route path="/tax" element={<Tax/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/policy" element={<Policy/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
