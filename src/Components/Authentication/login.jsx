import React from 'react';
import '../../Styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <br /><br /><br />
        <form>
          <div className="input-group">
            <input type="text" id="username" name="username" required />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Login</button>
          <br /><br />
          <span>New User?<a href="/signup"> Sign Up</a></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
