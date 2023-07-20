import React, { useState } from 'react';

import './mf.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Mf() {
  const [principal, setPrincipal] = useState('');
  const [time, setTime] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [result, setResult] = useState('');

  const handlePrincipalChange = (event) => {
    setPrincipal(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    const simpleInterest = (principal * time * interestRate) / 100;
    setResult(`Simple Interest: ${simpleInterest}`);
  };

  return (
    <div className="container">
      <div className="row">
        <h4 id="main-heading">Mutual Fund Calculator</h4>
        <div className="col-xs-6 col-md-offset-3" style={{ marginTop: "5rem" }}>
          <form>
            <div className="form-group">
              <label htmlFor="principal">Enter principal:</label>
              <input className="form-control" id="principal" placeholder="Starting amount" type="text" value={principal} onChange={handlePrincipalChange} />
            </div>
            <div className="form-group">
              <label htmlFor="years">Enter time:</label>
              <input className="form-control" id="years" placeholder="Number of years" type="text" value={time} onChange={handleTimeChange} />
            </div>

            <div className="form-group">
              <label htmlFor="int-rate">Enter Interest rate:</label>
              <input className="form-control" id="int-rate" placeholder="Interest rate %" type="text" value={interestRate} onChange={handleInterestRateChange} />
            </div>
            <br />
            <br />
            <div className="button">
              <button type="submit" id="button" className="btn btn-danger col-sm-3" onClick={handleCalculate}>Calculate</button>
            </div>
            <br />
            <br />
            <div id="append">{result}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mf;