import { Outlet } from "react-router-dom";
import Home from "../Home page/Home";


const Mainroot = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainroot;