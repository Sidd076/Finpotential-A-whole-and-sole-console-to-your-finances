import React from 'react';

import './connect.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Connect() {
    return (
    <div class="container">
        <h1>CONNECT WITH US </h1>
        <h5> We would like to respond to your queries and help you succeed. Feel free to get in touch with us.</h5>
        <div class="contact-box">
            <div class="contact-left">
               <h3> Sent your request<span>&#9993;</span></h3>
               <form action="https://formspree.io/f/mdovywqd" method="POST">
                <div class="input-row">
                    <div class="input-group">
                        <label>Name</label>
                        <input type="text" name="Enter Your Name" required/>
                    </div>
                    <div class="input-group">
                        <label>Phone</label>
                        <input type="text" name="phone" phone="+01 545 5674 545" required/>
                    </div>
                </div>
                <div class="input-row">  
                    <div class="input-group">
                        <label>Email</label>
                        <input type="text" name="email" email="abc@gmail.com"required/>
                    </div>
                    <div class="input-group">
                        <label>Subject</label>
                        <input type="text" name="subject" subject="Type here..." required/>
                    </div>
                </div>
                
                <label>Message</label>
                <textarea rows="5" name="message" message="Your Message" ></textarea>

                <button type="submit">SEND</button>
               </form>
            </div>
            <div class="contact-right">
                <h3>Reach Us</h3>

                <table>
                    <tr>
                        <td >E-mail</td>
                        <td>contactus@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>+01 545 987 5609</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>WIT Girls hostel,
                            Solapur, 413006
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    
    );
}

export default Connect;
