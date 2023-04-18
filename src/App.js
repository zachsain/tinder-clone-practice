import React from 'react';
import './App.css';
import Header from './Header';
import ReactDOM from "react-dom/client";
import { Switch, Route } from "react-router-dom";
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route path = "/chat">
          <h1>I am chat page </h1>
        </Route>
        <Route exact path = "/">
          <Card />
        </Route>
      </Switch>
      
    </div>
  );
}


export default App;
