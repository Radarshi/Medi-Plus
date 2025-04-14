import { useEffect, useState } from "react";
import '../../Styles/Appointment/home.css';
import '../../Styles/bootstrap.min.css';
import Footer from '../footer.jsx';
import Navbar from '../navbar.jsx';
import Appointment from './appointment.jsx';
import Feature from './feature.jsx';
import Header from './header.jsx';
import Team from './team.jsx';

const Home = () => {
    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
    useEffect(() => {
      localStorage.setItem('current_theme', theme);
  }, [theme])
    return (
        <>

        <Navbar theme={theme} setTheme={setTheme} />
        
        <Header></Header>

        <Team></Team>

        <Appointment startDate="2025-01-01"></Appointment>

        <Feature></Feature>
            
        <Footer></Footer>
           
        </>
    )
}
export default Home