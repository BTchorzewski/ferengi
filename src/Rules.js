import React, { Component } from 'react'
import RuleContainer from './RuleContainer'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import './Rules.css'


import './Rules.css'
class Rules extends Component {
    
    render() {
        return (
            <div className="rules">
                <div className="rules__all">
                    <h2 className="rules__title">All rules</h2>
                    <div className="rules__items">
                        {  
                            this.props.allRules.map( e => {
                                return <RuleContainer rules={e} />
                                }
                            )
                        }
                    </div>
                </div>
                <div className="rules__liked">
                    <h2 className="rules__title">Liked rules</h2>
                    <div className="rules__items">
                        {  
                            this.props.likedRules.map( e => {
                                return <RuleContainer rules={e}/>
                                }
                            )
                        }
                </div>
                </div>     
            </div>   
            )
    }
}

const mapStateToProps = (state) => {
    return {
        likedRules: state.rules.filter(e => { return e.isLiked === true}),
        allRules: state.rules
    }
}



  
export const RulesContainer = withRouter(connect(mapStateToProps, null)(Rules));