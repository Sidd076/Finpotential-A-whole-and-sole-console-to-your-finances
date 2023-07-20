import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './about.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
    return (
        <section id="about">
          <div className="title-text">
            <p>ABOUT</p>
            <h1>Our Team</h1>
          </div>
          <div className="about-row">
            <div className="about-col">
              <div className="user">
                <img src="img-1.jpg" alt="user" />
                <div className="user-info">
                  <h4>Ankit Kotecha </h4>
                  <small>@AnkitKotecha</small>
                </div>
              </div>
              <p>
                Working as CA at FINPONENTIAL Foundation. Also working as a full-time stock market consultant.
              </p>
            </div>
            
            <div className="about-col">
              <div className="user">
                <img src="img-3.jpg" alt="user" />
                <div className="user-info">
                  <h4>Siddhant Kothari</h4>
                  <small>@SiddhantKothari</small>
                </div>
              </div>
              <p>
                Aspiring software developer skilled in backend development and Python.
              </p>
            </div>
          </div>
        </section>
    );
}

export default About;
