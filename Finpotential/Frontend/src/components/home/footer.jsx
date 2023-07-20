import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css';

function Footer() {
    return (
        <footer class="footer">
        <div class="container-footer">
          <div class="row-footer">
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About us</a></li>
                <li><a href="/services">Our services</a></li>
                <li><a href="/features"> Features</a></li>
                <li><a href="/testimonial"> Testimonial</a></li>
                <li><a href="/privacy">Privacy policy</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/funds">Funds</a></li>
                <li><a href="/finance">Finance Management</a></li>
                <li><a href="/insurance">Insurance</a></li>
                <li><a href="/deposit">Fixed Deposit</a></li>
                <li><a href="/tax">Tax</a></li>
                <li><a href="/policy">Policies</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Calculator</h4>
              <ul>
                <li><a href="./si">Simple Interest</a></li>
                <li><a href="./ci">Compound Interest</a></li>
                <li><a href="./sip">SIP Calculator</a></li>
                <li><a href="./mf">Mutual Funds</a></li>
                <li><a href="#">Insurance</a></li>
                
              </ul>
            </div>
            <div class="footer-col">
              <h4>Follow us</h4>
              <div class="social-links">
                <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804944%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804944&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007788%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw9J2iBhBPEiwAErwpeYyg21cIYv1zDsrsADm-sBcPi8Ue7mWQ0m5tXe6qddWabDYFv8fONhoCHq8QAvD_BwE"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            
              <div class="footer-col">
                <h4> CONNECT WITH US</h4>
                
                <ul>
                  <li>
                    <a href="/connect">GET CONNECT</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     </footer>
  
  

    );
}

export default Footer;
