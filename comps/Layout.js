import Navbar from "./Navbar";
import Footer from "./Footer";
import QuickNavbar from "./quickNavbar";

const Layout=({children})=>{
    return(
        <div className="content">
            <QuickNavbar/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;