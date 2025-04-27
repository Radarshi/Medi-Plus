import Footer from '../footer.jsx';
import Navbar from "../navbar";
import Content from './content.jsx';
import Header from "./header.jsx";
import Overview from "./overview.jsx";

const landing = () => {
    return(
        
        <>
        <Navbar></Navbar>

        <Header></Header>

        <Overview></Overview>

        <Content></Content>

        <Footer></Footer>
        </>
    )
}

export default landing;