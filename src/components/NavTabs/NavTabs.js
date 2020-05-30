import React from "react";
//import ReactDOM from "react-dom";
import './NavTabs.scss';
import Button from 'react-bootstrap/Button'

function Tabs(props) {
    return( 
      //<a href="" className="nav-item"></a>
      <Button variant="outline-light">{props.title}</Button>
    )
  }

export default Tabs;