import React, { useState } from 'react';
import './si.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Si() {
  const [principal, setPrincipal] = useState('');
  const [years, setYears] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [simpleInterest, setSimpleInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const interest = (principal * years * interestRate) / 100;
    setSimpleInterest(interest);
  }

  return (
    <div className="container">
      <div className="row">
        <h4 id="main-heading">Simple Interest Calculator</h4>
        <div className="col-xs-6 col-md-offset-3" style={{ marginTop: '4.5rem' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="principal">Enter principal:</label>
              <input
                className="form-control"
                id="principal"
                placeholder="Starting amount"
                type="text"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="years">Enter time:</label>
              <input
                className="form-control"
                id="years"
                placeholder="Number of years"
                type="text"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="int-rate">Enter Interest rate:</label>
              <input
                className="form-control"
                id="int-rate"
                placeholder="Interest rate %"
                type="text"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <br />
            <br />
            <div className="button">
              <button type="submit" id="button" className="btn btn-danger col-sm-3">
                Calculate
              </button>
            </div>
            <br />
            <br />
            <div id="append">
              {simpleInterest ? `Simple interest: ${simpleInterest}` : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Si;