import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Question from './components/Question'
import Result from './components/Result'
import './App.css';
import Home from './components/Home'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/question">
              <Question/>
            </Route>
            <Route path="/result">
              <Result/>
            </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
