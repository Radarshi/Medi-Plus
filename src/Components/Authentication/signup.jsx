import React from 'react';
import '../../Styles/signup.css';

const signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Welcome Onboard</h2>
        <br /><br /><br />
        <form>
          <div className="input-group">
            <input type="text" id="username" name="username" required />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-group">
            <input type="number" id="mobile" name="number" required />
            <label htmlFor="number">Phone Number</label>
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">signup</button>
          <br /><br />
          <span>Existing User?<a href="/login">Login</a></span>
        </form>
      </div>
    </div>
  );
};

export default signup;
