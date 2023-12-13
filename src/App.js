import './App.css';

import Navbar from './components/Navbar';
// import News from './components/News';
import Cocktail from './components/Cocktail';
import LoadingBar from 'react-top-loading-bar'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <>
      <Router>
        <div>
          <Navbar/>
          <LoadingBar
            height= {3}
            color='#f11946'
          />
          <Switch>
            <Route exact path="/"><Cocktail key="general" category="All Day Cocktail"/></Route>
            <Route exact path="/Before Dinner Cocktail"><Cocktail key="1" category="Before Dinner Cocktail"/></Route>
            <Route exact path="/All Day Cocktail"><Cocktail key="2" category="All Day Cocktail"/></Route>
            <Route exact path="/After Dinner Cocktail"><Cocktail key="3" category="After Dinner Cocktail"/></Route>
            <Route exact path="/Longdrink"><Cocktail key="4" category="Longdrink"/></Route>
            <Route exact path="/Sparkling Cocktail"><Cocktail key="5" category="Sparkling Cocktail"/></Route>
          </Switch>
        </div>
      </Router>
      </>
    )
}

export default App
