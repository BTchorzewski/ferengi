import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllRules } from './redux/selector';
import {withRouter} from 'react-router-dom';
import RuleContainer from './RuleContainer';
import styled from 'styled-components';


import _ from 'lodash';

const Random = styled.div`
    background-color: #f3ff93;
    padding: 5rem 4rem 2rem 4rem;
    width: 70%;
    min-height: 12vh;
    border-radius:.3rem;
    box-shadow: 0 .3rem .6rem rgba(0,0,0, .25);
    display: flex;
    flex-flow: column wrap;
    @media screen and (max-width: ${props => props.theme.responsive.tabLand}) {
        width: 100%;
    }
`;

const Button = styled.button`
    background-color: #c6cf65;
    border: none;
    border-radius: 30rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    box-shadow: 0rem .4rem .5rem .2rem rgba(0,0,0, .25);
    align-self: center;
    &:active {
        box-shadow: 0rem .2rem .5rem .2rem rgba(0,0,0, .25);
    }
`;

class RandomMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 2
        }
    }
    randomNumber() {
        this.setState({
            randomNumber: _.random(1, 148)
        })
    }
    
    render() {
        const randomRule = this.props.allRules[this.state.randomNumber];
        return (
            <Random>
                <ul>
                    <RuleContainer key={randomRule.id} rules={randomRule} />
                </ul>
                
                <Button onClick={this.randomNumber.bind(this)}>Random rule</Button>
            </Random>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allRules: getAllRules(state)
    }
}

export const RandomMachineContainer = withRouter(connect(mapStateToProps, null)(RandomMachine));