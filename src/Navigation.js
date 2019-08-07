import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const NavigationContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 1rem 2rem;
    flex: 1 0 95%;
    
    @media screen and (max-width: 900px) {
        & {
            justify-content: center;
        }
    }
`;

const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    

    @media screen and (max-width: 900px) {
        & {
            display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
            height: ${({isOpen}) => isOpen ? '100vh' : 0};
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            

        }
    }
`;
const NavigationItem = styled.li`
    

    :not(:last-child){
        margin: 0 1rem 0 0;
        
        @media screen and (max-width: 900px) {
            & {
                margin: 0 0 3rem 0;
                display: flex;
                width: 100%;
            }
        }
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

        @media screen and (max-width: 900px) {
            & {
                flex: 1 0 100%;
                text-align: center;
            }
        }
        
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
               
                <NavigationList isOpen={this.state.isOpenNavigation }>
                
                    <NavigationItem>
                        <NavigationLink onClick={() => {this.activeHome(); this.openNavigation()}} isChoosen={this.state.isActiveHome} to='/'>Home</NavigationLink>
                    </NavigationItem>
                
                    <NavigationItem>
                        <NavigationLink onClick={() => {this.activeRandom(); this.openNavigation()}} isChoosen={this.state.isActiveRandom} to='/random'>Random rule</NavigationLink>
                    </NavigationItem>
                
                    <NavigationItem>
                        <NavigationLink onClick={() => {this.activeRules(); this.openNavigation()}} isChoosen={this.state.isActiveRules} to='/rules'>List of rules</NavigationLink>
                    </NavigationItem>

                </NavigationList>

            </NavigationContainer>
        )
    }
}
