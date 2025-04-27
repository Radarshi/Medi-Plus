import { SignUp } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Appointment/home.jsx';
import Login from './Components/Authentication/login.jsx';
import Blogs from './Components/Blogs/landing.jsx';
import LabTests from './Components/LabTests/home.jsx';
import Landing from "./Components/Landing/landing.jsx";
import Cart from './Components/Store/cart.jsx';
import Store from './Components/Store/home.jsx';
import Errors from './Components/error.jsx';

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/appointment" element={<Home />}></Route>
          <Route path='/health-blogs' element={<Blogs/>}></Route>
          <Route path='/lab-tests' element={<LabTests/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/error' element={<Errors/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
