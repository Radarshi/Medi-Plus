import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import reportWebVitals from './reportWebVitals.js';

const clerk_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
console.log("Clerk Key:", clerk_key);



if (!clerk_key) {
  throw new Error("Missing Publishable Key")
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerk_key}>

      <App />
      </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
