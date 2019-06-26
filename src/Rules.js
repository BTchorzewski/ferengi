import React, { Component } from 'react'
import RuleComponent from './RuleComponent'
import rulesJSON from './data/rules'
import './Rules.css'
export default class Rules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: []
        }
        this.likesChangedHandler = this.likesChangedHandler.bind(this)
    }
    componentDidMount() {
        this.setState({
            rules: [...rulesJSON]
        })
    }


    likesChangedHandler = (ruleID) => {
        const rules = [...this.state.rules];
        const ruleIndex = this.state.rules.findIndex( rule => {
          return rule.id === ruleID;
        });
        const rule = {
          ...this.state.rules[ruleIndex]
        };
        rule.liked = !rule.liked;
        rules[ruleIndex] = rule;
        this.setState({
          rules: rules
        });
    }

    render() {

        const likedRules = this.state.rules.filter( e => e.liked === true );

        return (
            <div>
              
                   <div className="rules">
                       <div className="rules__all">
                           <h2 className="rules__title">All rules</h2>
                           <div className="rules__items">
                                {
                                    this.state.rules.map( e => {
                                        return <RuleComponent 
                                                data={e}
                                                changeLikes={this.likesChangedHandler}
                                            />
                                        }
                                    )
                                }
                            </div>
                       </div>

                       <div className="rules__liked">
                           <h2 className="rules__title">Liked rules</h2>
                           <div className="rules__items">
                                {
                                    likedRules.map( e => {
                                        return <RuleComponent 
                                                data={e}
                                                changeLikes={this.likesChangedHandler}
                                            />
                                        }
                                    )
                                }

                           </div>
                        </div>




                   </div>
                   
              
                
            </div>
        )
    }
}
