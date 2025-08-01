import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./NavBar";

const Body = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Body;
