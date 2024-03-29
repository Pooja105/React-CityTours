import React from 'react';
import "./NavBar.scss";
import logo from "../../logo.png";

export default function NavBar() {
    return(
        <nav className="navbar" >
            <img src={logo} alt="City tours list"/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                    home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                    about
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                    Tours
                    </a>
                </li>
            </ul>    
        </nav>     
    );
}