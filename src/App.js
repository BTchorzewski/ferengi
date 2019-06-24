import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from './Navigation';
import Rules from './RulesComponent';
import Random from './Random';
function App() {
  return (
    <Router>
        <div className="App">
          <Navigation />
        

          
        </div>
        
        <Route path="/random/" component={Random} />
        <Route path="/rules/" component={Rules} /> 
    </Router>
    
  );
}

export default App;
