import React from "react";
import ReactDOM from "react-dom";
import './LangLogo.scss';

// function ToDoItem(props){
//     return(
//         <div className ="todo-item">
//             <input type="checkbox" checked={props.todo.completed}/>
//             <p>{props.todo.item}</p>
//         </div>
//     )
// }

class LangLogo extends React.Component{
    
    render(){
        return(
            <div className="logoDiv">
               
               <img className="logo" src={require(`../../img/${this.props.url}`)}/>

                    <div className="lang-label">{this.props.lang}</div>

            </div>
        )
    }
  }
export default LangLogo;

//img src={require(`../../img/${this.props.url.toLowerCase()}')}

//<img src={require(this.props.url.toString())}/>