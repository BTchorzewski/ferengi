import React, { Component } from 'react';
import Navigation from './Navigation'
import styled from 'styled-components';

import Logo from './Logo'

const Container = styled.div`
    background-color: #560d0d;
    padding: 2rem 3rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    position: sticky;
    top: 0;
    z-index: 50;

    @media screen and (max-width: 900px) {
        & {
            align-items: flex-start;
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
