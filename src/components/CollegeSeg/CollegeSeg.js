import React from "react";
//import ReactDOM from "react-dom";
import './CollegeSeg.scss';
import Media from 'react-bootstrap/Media'

class CollegeSeg extends React.Component{
    
    render(){
        return(
            <div className="college-div">
               <h2>College:</h2>
                <hr></hr>
                <div className = "media-changes">
                <Media>
                    
                   
                    <Media.Body>
                        <div className="college-content">
                            <h5>Louisiana State University</h5>
                            <p >
                                Degree: Computer Science<br/>
                                Overall GPA: 3.49<br/>
                                August 2016 - May 2020
                            </p>
                        </div>
                    </Media.Body>
                    <img className="  mr-3" src={require(`../../img/LSU.svg`)} alt="college-logo"/>
                    
                </Media>
                </div>
            </div>
        )
    }
  }
export default CollegeSeg;

{/* <div className="coll-entry">
<img src={require(`../../img/LSU.svg`)}/>
<p>Louisiana State University</p>
</div> */}