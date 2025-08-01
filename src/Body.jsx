import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const Body = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Body;
