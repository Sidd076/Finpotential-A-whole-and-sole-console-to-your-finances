import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './testimonial.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Testimonial() {
    return (
        <section id="testimonial">
            <div className="title-text">
                <p>TESTIMONIALS</p>
                <h1>Our clients say</h1>
            </div>
            <div className="testimonial-row">
                <div className="testimonial-col">
                    <div className="user">
                        <img src="img-1.jpg" />
                        <div className="user-info">
                            <h4>Sen Herman <i className="fab fa-twitter"></i></h4>
                            <small>@SenHerman</small>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, doctus dolorem mediocritatem id sed. Sit
                        an porro euismod oportere, duo te vitae audire percipitur, duo id
                        adhuc gubergren. Amet fierent detraxit in vix, dolorem aliquando
                        referrentur ne quo. No congue disputando pro, adhuc ignota cu nam.
                    </p>
                </div>
                <div className="testimonial-col">
                    <div className="user">
                        <img src="img-2.jpg" />
                        <div className="user-info">
                            <h4>Sen Herman <i className="fab fa-twitter"></i></h4>
                            <small>@SenHerman</small>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, doctus dolorem mediocritatem id sed. Sit
                        an porro euismod oportere, duo te vitae audire percipitur, duo id
                        adhuc gubergren. Amet fierent detraxit in vix, dolorem aliquando
                        referrentur ne quo. No congue disputando pro, adhuc ignota cu nam.
                    </p>
                </div>
                <div className="testimonial-col">
                    <div className="user">
                        <img src="img-3.jpg" />
                        <div className="user-info">
                            <h4>Sen Herman <i className="fab fa-twitter"></i></h4>
                            <small>@SenHerman</small>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, doctus dolorem mediocritatem id sed. Sit
                        an porro euismod oportere, duo te vitae audire percipitur, duo id
                        adhuc gubergren. Amet fierent detraxit in vix, dolorem aliquando
                        referrentur ne quo. No congue disputando pro, adhuc ignota cu nam.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
