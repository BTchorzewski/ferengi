import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styledComponents/theme';
import GlobalStyles from './styledComponents/GlobalStyles'
import store from './redux/store';
import NavigationBar from './NavigationBar';
import { RulesContainer } from './Rules';
import { RandomMachineContainer } from './RandomMachineContainer';

import Home from "./Home";

const Main = styled.main`
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10rem 0;
  @media screen and (max-width: ${props => props.theme.responsive.tabLand}) {
    padding: 0;
    align-items: stretch;
  }
  
`;



function App() {
  return (
    <Provider store={store}>
      
      <ThemeProvider theme={theme}>
      <>  
      <GlobalStyles />

      <Router>
        

        <NavigationBar />

        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/random" component={RandomMachineContainer} />
          <Route path="/rules" component={RulesContainer} /> 
        </Main>

      </Router>
      </>
      </ThemeProvider>
      
    </Provider> 
  );
}

export default App;
