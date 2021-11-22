import React from "react";



const Navbar = () =>{
    return(
        <nav className="navbar">
            <ul className="links">
                <li><h4>logo</h4></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="/" className="logout-link">Logout</a></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;