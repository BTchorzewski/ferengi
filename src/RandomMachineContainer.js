import React, { Component } from 'react'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import RuleContainer from './RuleContainer'
import './RandomMachine.css'
import _ from 'lodash'


class RandomMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 2
        }
    }
    randomNumber() {
        this.setState({
            randomNumber: _.random(1, 4)
        })
    }
    
    render() {
        return (
            <div className='random-machine'>
                <RuleContainer rules={this.props.allRules[this.state.randomNumber]} />
                <button className='random-machine__button' onClick={this.randomNumber.bind(this)}>Random rule</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allRules: state.rules
    }
}

export const RandomMachineContainer = withRouter(connect(mapStateToProps, null)(RandomMachine));