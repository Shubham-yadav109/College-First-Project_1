import React, { useState } from 'react';
import axios from 'axios'; 

export const Login=() =>{
    const [Password, setPasswordvalue] = useState("");
    const [userId, setUserIdvalue] = useState("");

    const handlePasswordChange = (e) => {
        setPasswordvalue(e.target.value);
    };

    const handleUserIdChange = (e) => {
        setUserIdvalue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("This is our data: " + userId + " " + Password);

        const data={
            'userId':userId,
            'password':Password
        }
        try{
            const response= await axios.post("http://localhost:8082/loginUser",data);
            console.log("This is the response "+response.data);
            

            if(!response.data){
                alert("Invalid User Id or Password");
            }else{
                alert("Login Successfull");
            }
        }catch(error){
            console.error(error);
        }
    }

    const RedirectToRegister = () => {
        window.location.href = "/register";
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <br />
                    <br />
                    <label>User ID:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your User ID:"
                        value={userId}
                        onChange={handleUserIdChange}
                    />
                    <br />
                    <br />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="pass"
                        placeholder="Enter your Password:"
                        value={Password}
                        onChange={handlePasswordChange}
                    />
                    <br />
                    <br />
                    <a href="/register">Don't have an account?</a>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
