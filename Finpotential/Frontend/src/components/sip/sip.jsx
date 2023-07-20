import React, { useState } from 'react';
import './sip.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sip() {
  const [result, setResult] = useState(null);

  const currencyChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseFloat(document.getElementById('years').value);
    const rate = parseFloat(document.getElementById('int-rate').value);

    const interest = (principal * years * rate) / 100;
    const totalAmount = principal + interest;

    setResult(totalAmount.toFixed(2));
  };

  return (
    <div className="container">
      <div className="row">
        <h2 id="main-heading">SIP Calculator</h2>
        <div className="dropdown">
          Currency
          <select onChange={currencyChange} id="currency" className="currency">
            <option value="Rs">&#8377; &nbsp;INR</option>
          </select>
        </div>
        <div className="col-xs-6 col-md-offset-3" style={{ marginTop: '5rem' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="principal">Enter Monthly Investment :</label>
              <input className="form-control" id="principal" placeholder="Starting amount" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="years">Enter Number of Years:</label>
              <input className="form-control" id="years" placeholder="Number of years" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="int-rate">Enter Expected Rate of Return :</label>
              <input className="form-control" id="int-rate" placeholder="Interest rate %" type="text" />
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
            <div id="append">{result && <p>Total Amount: {result}</p>}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sip;