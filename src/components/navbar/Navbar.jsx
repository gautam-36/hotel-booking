import React from "react"
import { useNavigate } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    const navigate = useNavigate()

    const forward = ()=>{
        navigate("/")
    }
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo" onClick={forward}>HotelBooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )

};


export default Navbar;
