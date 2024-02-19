import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Password:
          <input 
            type="password" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    </div>
  )
  
}


export default Login