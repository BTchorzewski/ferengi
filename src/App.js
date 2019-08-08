import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styledComponents/theme';
// import GlobalStyle from './styledComponents/base'
import store from './redux/store';
import NavigationBar from './NavigationBar';
import { RulesContainer } from './Rules';
import { RandomMachineContainer } from './RandomMachineContainer';

import Home from "./Home";

const Main = styled.main`
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
  
  
`;

function App() {
  return (
    <Provider store={store}>

      <ThemeProvider theme={theme}>

      

      <Router>

        <NavigationBar />

        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/random" component={RandomMachineContainer} />
          <Route path="/rules" component={RulesContainer} /> 
        </Main>

      </Router>

      </ThemeProvider>
      
    </Provider> 
  );
}

export default App;
