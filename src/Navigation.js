import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
    background-color: #560d0d;
    padding: 2rem 3rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    position: sticky;
    top: 0;
    z-index: 5;

`;

const NavigationList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
`;

const NavigationItem = styled.li`
    &:not(:last-child){
        margin-right: 1.5rem;
    }
`;

const StyledLink = styled(Link)`
    &:link,
    &:visited {
        text-decoration: none;
        color: #fff;
        border: .2rem solid transparent;
        border-radius: .3rem;
        padding: 1rem;
    }
    &:hover,
    &:active {
        border: .2rem solid #fff; 
    }
`;









export default class Navigation extends Component {
    render() {
        return (
            <NavigationBar>
                <div className='navigation__logo'>LOGO FERENGI</div>
                <nav className='navigation'>
                    <NavigationList>
                        <NavigationItem>
                            <StyledLink className='navigation__link' to='/random'>Random rules</StyledLink>
                        </NavigationItem>
                        <NavigationItem>
                            <StyledLink className='navigation__link' to='/rules'>List of rules</StyledLink>
                        </NavigationItem>
                    </NavigationList>
                </nav>
            </NavigationBar>
        )
    }
}
