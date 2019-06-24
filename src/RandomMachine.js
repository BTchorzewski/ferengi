import React, { Component } from 'react'
import rulesJSON from '../src/data/rules'
import RuleComponent from './RuleComponent'
import './RandomMachine.css'
import _ from 'lodash'
export default class RandomMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rule: {},
            random: 34
        }
    this.randomRuleCreator = this.randomRuleCreator.bind(this);
    }
    
    componentDidMount() {
        this.setState({
            rule: rulesJSON[this.state.random]
        })
    }

    randomRuleCreator() {
        this.setState({
            rule: rulesJSON[_.random(0, rulesJSON.length)]
        })
    }

    render() {
        return (
            <div className='random-machine'>
                <RuleComponent data={this.state.rule} random={this.randomRuleCreator}/>
                <button className='random-machine__button' onClick={this.randomRuleCreator}>Random rule</button>
            </div>
        )
    }
}
