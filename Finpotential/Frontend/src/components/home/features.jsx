import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './features.css';

function Features() {
    return (
        <section id="feature">
      <div class="title-text">
        <p>FEATURES</p>
        <h1>Why Choose Us</h1>
      </div>

      <div class="features-box">
        <div class="features">
          <h1>Funds Management</h1>
          <div class="features-desc">
            <div class="features-text">
              <p>
                Funds management is the overseeing and handling of a financial
                institution's cash flow.
              </p>
            </div>
          </div>

          <h1>Insurance</h1>
          <div class="features-desc">
            <div class="features-text">
              <p>
                Insurance is a way to manage your risk. When you buy insurance,
                you purchase protection against unexpected financial losses.
              </p>
            </div>
          </div>

          <h1>Pension</h1>
          <div class="features-desc">
            <div class="features-text">
              <p>
                A pension is a retirement fund for an employee paid into by the
                employer, employee, or both, with the employer usually covering
                the largest percentage of contributions.
              </p>
            </div>
          </div>
        </div>

        <div class="features-img">
          <img src="./finance.svg "alt='FINANCE'/>
        </div>
      </div>
    </section>

    );
}

export default Features;

