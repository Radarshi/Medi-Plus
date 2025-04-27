import Footer from '../footer.jsx';
import Navbar from '../navbar.jsx';
import Header from './header.jsx';
import Review from './review.jsx';
import Details from './test-details.jsx';

const Home = ({theme,setTheme}) => {
    const toggleMode = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };
    return (
        <>
            <Navbar></Navbar>
            <br />
            <br /><br /><br />
            <Header></Header>
            <hr />
            <Details></Details>
            <br />
            <Review></Review>
            <Footer></Footer>
        </>
    )
}

export default Home;