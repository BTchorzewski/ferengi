import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import Navigation from './Navigation';
import {RulesContainer} from './Rules';
import Random from './Random';
function App({store}) {
  return (
    <Provider store={store}>
      <Router>
          
            <Navigation />
            <Route path="/random/" component={Random} />
            <Route path="/rules/" component={RulesContainer} /> 
          
      </Router>
    </Provider> 
  );
}

export default App;
