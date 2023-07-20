import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', { name, email, password }, { withCredentials: true })
      .then(navigate("/"))
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
      <div>
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </form>
  );
}

export default Signup;
