import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './redux/store'
import Navigation from './Navigation';
import { RulesContainer } from './Rules';
import { RandomMachineContainer } from './RandomMachineContainer';
import Home from "./Home";
const Main = styled.main`
  background-color: #76a21e;
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
  
  
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/random" component={RandomMachineContainer} />
          <Route path="/rules" component={RulesContainer} /> 
        </Main>
      </Router>
    </Provider> 
  );
}

export default App;
