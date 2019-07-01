import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import styled from 'styled-components';

import Navigation from './Navigation';
import { RulesContainer } from './Rules';
import { RandomMachineContainer } from './RandomMachineContainer';

const Main = styled.main`
  background-color: #76a21e;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`;

function App({store}) {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Main>
          <Route path="/random/" component={RandomMachineContainer} />
          <Route path="/rules/" component={RulesContainer} /> 
        </Main>
      </Router>
    </Provider> 
  );
}

export default App;
