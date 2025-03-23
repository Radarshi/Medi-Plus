import { SignUp } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Appointment/home.jsx';
import Login from './Components/Authentication/login.jsx';
import LabTests from './Components/Labtests/land.jsx';
import Landing from "./Components/Landing/landing.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/appointment" element={<Home />}></Route>
          <Route path='/labtest' element={<LabTests/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
