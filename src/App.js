import NavBar from "./NavBar"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {

  console.log("Hi there!")


  return (
    <div className="App">
          <NavBar />
          <div className="App-header">
            <Route exact path = "/home">
              <AboutMe/>
            </Route>
            <Switch>
              <Route exact path = "/portfolio">
                <Portfolio /> 
              </Route>
            </Switch>
          </div>

    </div>
  );
}

export default App;
