import React from "react";
//import ReactDOM from "react-dom";
import './Intro.scss';
import Image from 'react-bootstrap/Image'

function Intro(){
    return(
        <div className="body">
            <h2 className = "intro name-intro">Mark Thibodeaux</h2>
            <p className = "intro">Hi, I'm Mark Thibodeaux. I am a recent graduate from LSU with a degree in Computer Science. During my time at LSU I have 
                learned my different skills, sme tchnical and some soft. </p>

            <div className="circular--portrait">
                <Image className="pic" src={require('../../img/headshot.jpg')} alt ="headshot" roundedCircle/>
            </div>
        </div>
    )
}

export default Intro;