import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './aboutus.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AboutUs() {
  return (

    <section class="about-us">
    <div class="about">
      <img src="aboutus.png" class="pic"/>
      <div class="text">
        <h2>About Us</h2>
        <h5>A whole and sole console  <span>for financial management</span></h5>
          <p>To ensure that financial management for investment plans that  meet the user requirements. We will be able to predict "What are  They and Their Future".
          As we know that these days rough calculations have  made it complicated to get the exact amount of output  for a particular investment. So, we are going to provide  the user with some calculative tools where user can  thoroughly calculate the estimated amount of outcome  with ease.
We are also going to analyze and predict the behaviour of stock market using the AI and ML concepts. We are also  going to predict someone’s investment personality by  testing his investment skills with some basic investment  related QnA.
</p><div class="data">
        <a href="./connect" class="hire">Contact US</a>
        </div>
      </div>
    </div>
  </section>
  );
}


export default AboutUs;
