import React, { Component } from 'react'
import rulesJSON from '../src/data/rules'
import RuleComponent from './RuleComponent'
import './RandomMachine.css'
import _ from 'lodash'
export default class RandomMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: [...rulesJSON],
            rule: {},
            random: 34
        }
    this.randomRuleCreator = this.randomRuleCreator.bind(this);
    
    }
    
    componentDidMount() {
        this.setState({
            rule: this.state.rules[this.state.random]
        })
    }

    randomRuleCreator() {
        this.setState({
            rule: rulesJSON[_.random(0, rulesJSON.length)]
        })
    }

    nameChangedHandler = (ruleID) => {
        // kopiujemy tablice
        const rules = [...this.state.rules];
        // szukamy indexu elementu którego chcemy zmienić.
        const ruleIndex = this.state.rules.findIndex( rule => {
          return rule.id === ruleID;
        });
        // kopiujemy nasz element z tablicy
        const rule = {
          ...this.state.rule[ruleIndex]
        };
        // zmieniamy wartość 'name' w tym elemencie
        rule.like = !rule.like;
        // wpisujemy element do naszej nowej listy
        rules[ruleIndex] = rule;
        // aktualizujemy nasz stan
        this.setState({
          rules: rules
        });
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
