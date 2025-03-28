import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const LoginSignup = () => {
    const navigate = useNavigate();
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { setUser } = useContext(ShopContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically make an API call to authenticate
        // For now, we'll simulate a successful login/signup
        if (state === "Login") {
            // Simulate login
            setUser({ email: formData.email });
            navigate('/');
        } else {
            // Simulate signup
            setUser({ name: formData.name, email: formData.email });
            navigate('/');
        }
    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-toggle">
                    <p 
                        className={state === "Login" ? "active" : ""} 
                        onClick={() => setState("Login")}
                    >
                        Login
                    </p>
                    <p 
                        className={state === "Sign Up" ? "active" : ""} 
                        onClick={() => setState("Sign Up")}
                    >
                        Sign Up
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    {state === "Sign Up" && (
                        <input 
                            type="text" 
                            placeholder='Your Name' 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required 
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder='Email Address' 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required 
                    />
                    {state === "Sign Up" && (
                        <div className="loginsignup-agree">
                            <input type="checkbox" required />
                            <label>I agree to the terms of use & privacy policy.</label>
                        </div>
                    )}
                    <button type="submit" className="submit-button">
                        {state === "Login" ? "Login" : "Continue"}
                    </button>
                    {state === "Login" && (
                        <p className="forgot-password">Forgot Password?</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginSignup;
