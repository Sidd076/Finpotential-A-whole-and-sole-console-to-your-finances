import React, { useState } from 'react';
import './ci.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Ci() {
  const [principal, setPrincipal] = useState(0);
  const [years, setYears] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = parseFloat(principal);
    const t = parseFloat(years);
    const n = parseFloat(cycles);
    const r = parseFloat(interestRate) / 100;
    const compoundInterest = p * Math.pow(1 + r/n, n*t);
    setResult(compoundInterest.toFixed(2));
  }

  return (

      <div className="row">
        <h4 id="main-heading">Compound Interest Calculator</h4>
        <div className="col-xs-6 col-md-offset-3" style={{marginTop: '3.7rem'}}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="principal">Enter principal:</label>
              <input className="form-control" id="principal" placeholder="Starting amount" type="text" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="years">Enter time:</label>
              <input className="form-control" id="years" placeholder="Number of years" type="text" value={years} onChange={(e) => setYears(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="cycles">How many cycles per year will Interest be compounded?</label>
              <input className="form-control" id="cycles" placeholder="Compound cycles/frequency per year" type="text" value={cycles} onChange={(e) => setCycles(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="int-rate">Enter interest rate:</label>
              <input className="form-control" id="int-rate" placeholder="Interest rate %" type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <br />
            <br />
            <div className="button">
              <button type="submit" id="button" className="btn btn-danger col-sm-3">Calculate</button>
            </div>
            {/* <div className="calc">
              <button type="submit" id="clear" className="btn btn-danger col-sm-2 ">Clear</button>
            </div> */}
            <br />
            <br />
            <div id="append">{result}</div>  
          </form>
        </div>
      </div>
    
  );
}

export default Ci;