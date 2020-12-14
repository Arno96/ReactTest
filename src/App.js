import ShowProfile from './ShowProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul class="nav nav-pills pull-right">
        <li role="presentation" id="homeHyperlink" class="active"><a href="#">Home</a></li>
        <li role="presentation" id="addHyperLink"><a href="/home#/addPost">Add</a></li>
        <li role="presentation" id="btnProfile"><a href="/showProfile">Profile</a></li>
        <li role="presentation"><a href="#">Logout</a></li>
      </ul>
      
      <ShowProfile/>
    </div>
    
  );
}

export default App;
