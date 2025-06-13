import React, { useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const registerData = {
    name: "",
    email: "",
    password: "",
  };

  const [register, setRegister] = useState(registerData);

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register);

    try{

      const response=await axios.post("http://localhost:8082/addUser",register);
      console.log(response.data);
      alert("User added successfully");
      
    }catch(error){
      console.log(error);
      
    }
  };

  return (
    <>
      <h2>Hello register</h2>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          id="username"
          name="name"
          placeholder="Enter your Name"
          value={register.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          value={register.email}
          onChange={handleChange}
        />

        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          value={register.password}
          onChange={handleChange}
        />

        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
