import React, { Component } from 'react';
import Navigation from './Navigation'
import styled from 'styled-components';

import Logo from './Logo'

const Container = styled.div`
    background-color: #560d0d;
    overflow: hidden;
   
    @media screen and (max-width: ${props => props.theme.responsive.tabLand}) {
        & {
           
        }
    }
`;

export default class NavigationBar extends Component {
    render() {
        return (
            <Container>

                <Logo />

                <Navigation />

            </Container>
        )
    }
}
