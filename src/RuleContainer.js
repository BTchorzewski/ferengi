import React, { Component } from 'react';
import { changeToLiked, changeToUnliked } from './redux/actions';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const StyledRule = styled.li`
    background-color: #bdff93;
    padding: 2rem;
    margin: .5rem;
    flex: 1;
    position: relative;
    list-style: none;
`;

const Paragraph = styled.p`
    font-size: 1.6rem;
    color: #3D3D3D;
`;

const Button = styled.button`
   
    
`;




class Rule extends Component {
    constructor(props){
        super(props)
        this.state = {
           isLiked: false
        }
        this.changeStateLike = this.changeStateLike.bind(this);
       
    }

    componentWillMount(){
        this.setState({
            isLiked: this.props.rules.isLiked
        })
    }
   
    
    changeStateLike(){
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    

    render() {
        return (
            <StyledRule>
                <Paragraph>Number: {this.props.rules.number}</Paragraph>
                <Paragraph>Rule: {this.props.rules.rule}</Paragraph>
                <Paragraph> Source: {this.props.rules.source}</Paragraph>
                <Paragraph>Favorite: {this.props.rules.isLiked ? "Liked" : "Can be liked"}</Paragraph>    
                    {
                        this.state.isLiked ?
                        <Button onClick={() => { this.props.unlike(this.props.rules.id); this.changeStateLike()} }>make unliked</Button>
                        :
                        <Button onClick={() => { this.props.like(this.props.rules.id); this.changeStateLike()}}>make liked</Button>
               


                    }
                        
                
                
            </StyledRule>
        )
    }
}




    
const mapDispatchToProps = (dispatch) => {
  return {
      like: (id) => { 
          dispatch(changeToLiked(id)) 
      },
      unlike: (id) => {
          dispatch(changeToUnliked(id))
      }
  }
}


export default withRouter(connect(null, mapDispatchToProps)(Rule))