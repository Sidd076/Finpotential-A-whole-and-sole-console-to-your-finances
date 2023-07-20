import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './services.css';

        
function Services() {
  return (
    <section id="service">
      <div class="title-text">
        <p>SERVICES</p>
        <h1>We Provide Better</h1>
      </div>
      <div class="service-box">
        <div class="single-service">
          <img src="img1.png" />
          <div class="overlay"></div>
          <div class="service-desc">
            <h3>Pension</h3>
            <hr />
            <p>
              A pension is a tax-efficient way to put money aside for later in
              life, to provide income for when you retire.
            </p>
          </div>
        </div>
        <div class="single-service">
          <img src="img2.jpg" />
          <div class="overlay"></div>
          <div class="service-desc">
            <h3>LIC</h3>
            <hr />
            <p>
              Government-owned - LIC comes with the sovereign guarantee of the
              Indian government, which makes its offerings a safe and reliable
              investment.
            </p>
          </div>
        </div>
        <div class="single-service">
          <img src="img3.jpg" />
          <div class="overlay"></div>
          <div class="service-desc">
            <h3>Insurance</h3>
            <hr />
            <p>
              Insurance is a way to manage your risk. When you buy insurance,
              you purchase protection against unexpected financial losses.
            </p>
          </div>
        </div>
        <div class="single-service">
          <img src="img4.jpg" />
          <div class="overlay"></div>
          <div class="service-desc">
            <h3>Policy</h3>
            <hr />
            <p>
              A policy is a set of ideas or plans that is used as a basis for
              making decisions, especially in politics, economics, or business.  
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Services;