import '../../Styles/Appointment//home.css'
import { useEffect, useState } from "react";
import '../../Styles/bootstrap.min.css'
import Footer from '../footer.jsx'
import Appointment from './appointment.jsx'
import Feature from './feature.jsx'
import Header from './header.jsx'
import Service from './service.jsx'
import Team from './team.jsx'
import Navbar from '../navbar.jsx'


const Home = () => {
    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
    useEffect(() => {
      localStorage.setItem('current_theme', theme);
  }, [theme])
    return (
        <>
        <div class="parallax">
         <div class="content">
            <h1>We all Live only one life</h1>
            <p>Live it as you want</p>
            </div>
        </div>
        <div class="parallax">
            <div class="content">
                <h1>Enjoy every moment like it is your last💀</h1>
                <p>Dont blame me later</p>
            </div>
        </div>
        <div class="parallax">
            <div class="content">
                <h1>Book Your Appointment Today </h1>
                <p>Kya pata kab kya ho jaaye</p>
                <a><button className='book'>Book Now</button></a>
            </div>
        </div>
    <Navbar theme={theme} setTheme={setTheme} />
    <Header></Header>

    <Service></Service>

    <Feature></Feature>

    <Team></Team>

    <Appointment></Appointment>
            
    <Footer></Footer> 
           
        </>
    )
}
export default Home