import React from "react"
// import MainCard from "./Components/Cards/MainCard"
// import Cards from "./Components/Cards/Cards"
import Main from "./Components/Main/Main"
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PayNow } from './Components/Pay/PayNow'
import ThanksPage from "./Components/ThanksPage/ThanksPage";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/paynow" exact component={PayNow} />
          <Route path="/thanks" exact component={ThanksPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


// {/* <Main />
// {/* <Cards /> */}
// <MainCard /> */}