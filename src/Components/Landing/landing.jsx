import { useEffect, useState } from "react";
import '../../Styles/Landing/landing.css';
import Footer from '../footer.jsx';
import Header from '../Landing/header.jsx';
import Offer from '../Landing/offer.jsx';
import Slider from '../Landing/slider1.jsx';
import Navbar from '../navbar.jsx';
import Appointment from './appointment.jsx';
import Blogs from './blog.jsx';
import Consult from './consult.jsx';


const Landing = () => {
    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
    useEffect(() => {
      localStorage.setItem('current_theme', theme);
  }, [theme])
    return(
        <>
            <div className={`main ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme} />
            <Offer></Offer>
            <Header></Header>
            <Slider></Slider>
            <Blogs></Blogs>
            <div className="consult"><h1>Consult with top doctors</h1></div>
            <Consult></Consult>
            <div className="appoint"><h1>Connect with the top doctors</h1></div>
            <Appointment></Appointment>
            <Footer></Footer> 
            <h1>Made with <span > ❤ </span> by Meds</h1>
            </div>
        </>
    )
}
export default Landing