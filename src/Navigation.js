import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
`;

const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;
const NavigationItem = styled.li`

    :not(:last-child){
        margin: 0 1rem 0 0;
    }
`;
const NavigationLink = styled(Link)`
    :link,
    :visited {
        color: #fff;
        font-size: 1.8rem;
        text-decoration: none;
        border: .2rem solid ${props => props.isChoosen ? '#fff' : 'transparent'};
        border-radius: .5rem;
        padding: 1rem 2rem;
    }

    :hover {
        border: .2rem solid #fff;
    }

    :active {

    }

    ::-moz-focus-inner {
        border: none;
    }
`;

export default class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            isActiveHome: true,
            isActiveRandom: false,
            isActiveRules: false,
            isOpenNavigation: true
        }

        this.activeHome = this.activeHome.bind(this);
        this.activeRandom = this.activeRandom.bind(this);
        this.activeRules = this.activeRules.bind(this);
        this.openNavigation = this.openNavigation.bind(this);
    }

    
    
    activeHome(){
        this.setState({
            isActiveHome: true,
            isActiveRandom: false,
            isActiveRules: false
        })
    }
    activeRandom(){
        this.setState({
            isActiveHome: false,
            isActiveRandom: true,
            isActiveRules: false
        })
    }
    activeRules(){
        this.setState({
            isActiveHome: false,
            isActiveRandom: false,
            isActiveRules: true
        })
    }
    
    openNavigation() {
        this.setState({
            isOpenNavigation: !this.state.isOpenNavigation
        })
        
    }

    render() {
        
        
        return (
            <NavigationContainer>
                
                <BurgerMenu isOpen={this.state.isOpenNavigation} handleClick={this.openNavigation} />
               
                <NavigationList>
                
                    <NavigationItem>
                        <NavigationLink onClick={this.activeHome} isChoosen={this.state.isActiveHome} to='/'>Home</NavigationLink>
                    </NavigationItem>
                
                    <NavigationItem>
                        <NavigationLink onClick={this.activeRandom} isChoosen={this.state.isActiveRandom} to='/random'>Random rule</NavigationLink>
                    </NavigationItem>
                
                    <NavigationItem>
                        <NavigationLink onClick={this.activeRules} isChoosen={this.state.isActiveRules} to='/rules'>List of rules</NavigationLink>
                    </NavigationItem>

                </NavigationList>

            </NavigationContainer>
        )
    }
}
