import React, { Component } from 'react';
import RuleContainer from './RuleContainer';
import { connect } from "react-redux";
import { getAllRules, getLikedRules } from './redux/selector'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #f3ff93;
    padding: 0 2rem;
    width: 70%;
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
        display: inline-block;
        font-size: 1.8rem;
        color: #f32145;
        
        
        
        &:not(:last-child) {
            margin-right: 1rem;
        }

        &:not(:last-child)::after {
            content: '';
        }

    }

`;



class Rules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbs: true
        }
    }
    changeBreadcrumbsTrue() {
        this.setState({
            breadcrumbs: true
        })
    }
    changeBreadcrumbsFalse() {
        this.setState({
            breadcrumbs: false
        })
    }

    
    render() {

        const toggleContainers = (param) => {
            if(param) {
                return (
                    <div>
                        <ul>
                            {  
                                this.props.allRules.map( e => {
                                    return <RuleContainer key={e.id} rules={e} />
                                    }
                                )
                            }
                        </ul>
                    </div>
                )
            } 
            else {
                return (
                    <div>
                        <ul>
                        
                            {  
                            this.props.likedRules.map( e => {
                                return <RuleContainer key={e.id} rules={e}/>
                                    }
                                )
                            }
                        
                        </ul>    
                    </div>
                )
            }
        };



        return (
            <Wrapper>
                <Breadcrumbs>
                    <BreadcrumbsItem onClick={this.changeBreadcrumbsTrue.bind(this)} href="#">All</BreadcrumbsItem>
                    <BreadcrumbsItem onClick={this.changeBreadcrumbsFalse.bind(this)} href="#">Liked</BreadcrumbsItem>
                </Breadcrumbs>
                
                {
                    toggleContainers(this.state.breadcrumbs)
                }
                         
                   
            </Wrapper>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        likedRules: getLikedRules(state),
        allRules: getAllRules(state)
    }
}



  
export const RulesContainer = withRouter(connect(mapStateToProps, null)(Rules));