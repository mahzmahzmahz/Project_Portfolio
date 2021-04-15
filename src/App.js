import NavBar from "./NavBar"
import Header from "./Header"
import Portfolio from "./Portfolio"
import About from "./About"
import Blogs from "./Blogs"
import Contacts from "./Contacts"
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {

  console.log("Hi there!")


  return (
    <div className="App">
          <NavBar />
          <div className="App-header">
            <Route exact path = "/">
              <Header/>
              <About/>
            </Route>
            <Switch>
              <Route exact path = "/portfolio">
                <Portfolio /> 
              </Route>
              <Route exact path = "/blogs">
                <Blogs /> 
              </Route>
              <Route exact path = "/contact-info">
                <Contacts/>
              </Route>
            </Switch>
          </div>

    </div>
  );
}

export default App;
