import React from "react"
import {NavLink, Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import AlexLogo from "./AlexLogo.png"

function NavBar(){
    return(
        <Navbar sticky="top" id="NavBar" >
            <Navbar.Brand style={{display: "inline"}}> <Link to="/" ><img className="NavBar-Alex" alt="Alex Marz's Page" src={AlexLogo}/></Link></Navbar.Brand>
                <div className="link-div">
                    <Link className="navLink" style={{ textDecoration: 'none'}} to="/portfolio"><strong>Portfolio</strong></Link>
                    <Link className="navLink" style={{ textDecoration: 'none'}} to="/blogs"><strong>Blogs</strong></Link>
                    <Link className="navLink" style={{ textDecoration: 'none'}} to="/contact-info"><strong>Contact</strong></Link>
                </div>
        </Navbar>
    )

}

export default NavBar;

