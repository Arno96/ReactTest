import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';


// var e = React.createElement('code', { className: 'greeting' }, 'Hello, world!');
// var ejsx = <code>Hello world!!</code>


    

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// class Overwatch extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {Dragonblade:"shut down"};
//     }
//     changeText = () => this.setState({Dragonblade:"hacked"});

    
//     render(){
//         return (
//          <div>
//         <p>Genji trash because {this.props.blade} has been {this.state.Dragonblade}</p>
//         <button type = "button" onClick = {this.changeText} >Change</button>
//         </div>   
//         );
//     }
// }

// ReactDOM.render(<Overwatch blade = "Nanoblade"/>, document.getElementById('root'));