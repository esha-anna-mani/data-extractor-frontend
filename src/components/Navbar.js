import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const NavBar=()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo left">Data Extractor</Link>
            {isLoggedIn?
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signup" className="waves-effect waves-light btn">Signup</Link></li>
                    <li><Link to="/login" className="waves-effect waves-light btn" onClick={()=>{setIsLoggedIn(false)}}>Login</Link></li>
                 </ul>
            :
                <ul id="nav-mobile" className="right">
                    <li><Link to="/profile"> <i className="material-icons md-36 cus-icon">account_circle</i></Link></li>
                    <li><Link to="/" className="waves-effect waves-light btn" onClick={()=>{setIsLoggedIn(true)}}>Logout</Link></li>
                </ul>

            
        }
            
            </div>
        </nav>
    )
}

export default NavBar