import NavBar from "./NavBar"
import AboutMe from "./AboutMe"
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {


  return (
    <div className="App">
          <NavBar />
          <div className="App-header">
            <Route>
              <AboutMe/>
            </Route>
          </div>

    </div>
  );
}

export default App;
