import React from 'react';
import logo from './logo.svg';
import './css/App.scss';
import './css/language-section.scss';
import Header from './components/Header/Header.js'
import Intro from './components/Intro/Intro.js'
import LangLogo from './components/LangLogo/LangLogo.js'
import CollegeSeg from './components/CollegeSeg/CollegeSeg.js'

import langlogos from './data/lang-logos.js';


class App extends React.Component{
  constructor(){
    super();
    this.state= {
      logos: langlogos
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(id){
  //   console.log("Chnaged", id);
    
  //   //return id.completed = !id.completed;
    
  //   this.setState(prevState =>{
  //     const updatedToDos = prevState.todos.map(todo => {
  //       if(todo.id === id){
  //         todo.completed = !todo.completed
  //       }
  //       return todo
  //     })
  //     return{
  //       todos: updatedToDos
  //     }
  //   })
  // }

  render(){
    const logoComponent = this.state.logos.map(item => <LangLogo lang={item.item} url={item.url}/>)

    return (
    <div className="Site-div">
      <Header/>
      <div id="header-intro">
        <Intro/>
      </div>
      <div id="body-segments">
        <div className="languages">
          <h2>Languages/Libraries/Frameworks:</h2>
          <hr></hr>
          <div className = 'logoList'>
            {logoComponent}
          </div>
        </div>
        <CollegeSeg/>
        <div className="languages">
          <h2>Work Experience:</h2>
          <hr></hr>
          <div className = 'logoList'>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="Site-div">
//       <div id="header-intro">
//         <Header/>
//         <Intro/>
//       </div>
//       <div id="body-segments">
//         <div className="languages">
//           <h2>Programming Languages:</h2>
//           <hr></hr>
//           <div>
//               <ul className='circle-container'>
//               <li className = 'lang-logo'><img className src = {require('./img/C_Sharp_logo.svg')} /></li>
//               <li className = 'lang-logo'><img src = {require('./img/Javalogo.svg')} /></li>
//               <li className = 'lang-logo'><img src = {require('./img/HTML_logo.svg')} /></li>
//               <li className = 'lang-logo'><img src = {require('./img/C_Sharp_logo.svg')} /></li>
//               <li className = 'lang-logo'><img src = {require('./img/C_Sharp_logo.svg')} /></li>
//               <li className = 'lang-logo'><img src = {require('./img/C_Sharp_logo.svg')} /></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

