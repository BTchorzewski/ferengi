import React, { Component } from 'react';
import RuleContainer from './RuleContainer';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #f3ff93;
    padding: 0 2rem;
    width: 30%;
    height: 70vh;
    overflow-y: scroll;
    position: relative;
`;

const Breadcrumbs = styled.div`
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: inherit;
    padding: 3rem;
    
`;

const BreadcrumbsItem = styled.a`
    &:link,
    &:visited {
        font-size: 1.8rem;
        color: #fff;    
    }

`;



class Rules extends Component {
   
    render() {
        return (
            <Wrapper>
                <Breadcrumbs>
                    <BreadcrumbsItem>All</BreadcrumbsItem>
                    <BreadcrumbsItem>Liked</BreadcrumbsItem>
                </Breadcrumbs>
                <div>
                    <ul>
                        {  
                            this.props.allRules.map( e => {
                                return <RuleContainer rules={e} />
                                }
                            )
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            {  
                            this.props.likedRules.map( e => {
                                return <RuleContainer rules={e}/>
                                    }
                                )
                            }
                        </li>
                    </ul>    
                </div>
                         
                   
            </Wrapper>   
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