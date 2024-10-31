import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header>
            <nav className="pt-6 flex  justify-between items-center w-full m-auto relative">
                <p className="ml-10" aria-label="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                </p>
                    <div className="w-[45%] absolute h-0.5 bg-gray-700 left-40 z-50 "></div>
                <div  className="font-barlow-conLight nav z-0 backdrop-blur-md bg-navBackground text-white flex items-center justify-center gap-5 text-3 w-auto h-20 pl-20 pr-28">
                    <Link className="uppercase tracking-wide" to="/" ><span className="font-semibold mr-2 active">00</span>Home</Link>
                    <Link className="uppercase tracking-wide" to="/destination"><span className="font-semibold mr-2">01</span>Destination</Link>
                    <Link className="uppercase tracking-wide" to="/crew"><span className="font-semibold mr-2">02</span>Crew</Link>
                    <Link className="uppercase tracking-wide" to="/technology" ><span className="font-semibold mr-2">03</span>Technology</Link>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;
