import React from "react";
//import ReactDOM from "react-dom";
import './Header.scss';
import NavTabs from '../NavTabs/NavTabs.js';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button'

// const date = new Date();
// const hours = date.getHours();
// let timeOfDay;

// if(hours < 12){
//     timeOfDay = "Mrongin";
// }else if(hours > 12 && hours < 17){
//     timeOfDay = "Evening";
// }else{
//     timeOfDay = "Night";
// }

// const styles = {
//     color: "red",
//     backgroundColor: "orange"
// }

function Header(){
    return(
        <div className="navbar sticky-top">
        <header>
            <div className = "tabgroup">
            <NavTabs title ={"About"}/>
            <NavTabs title ={"Resume"}/>
            <NavTabs title ={"Projects"}/>
            </div>
        </header>
        </div>
    )
}

export default Header;