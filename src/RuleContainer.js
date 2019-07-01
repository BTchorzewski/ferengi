import React, { useState } from 'react';
import { changeToLiked, changeToUnliked } from './redux/actions';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const StyledRule = styled.div`
    background-color: #bdff93;
    padding: 2rem;
    margin: .5rem;
    flex: 1;
    position: relative;
`;

const Paragraph = styled.p`
    font-size: 1.6rem;
    color: #3D3D3D;
`;

const Button = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: ${props =>  props.zIndex};
    
`;




const Rule = (props) => {
    // used hooks to update container
    const [ liked, setLiked] = useState(props.rules.isLiked);
    


    return (
        <StyledRule key={props.rules.id}>
            <Paragraph>Number: {props.rules.number}</Paragraph>
            <Paragraph>Rule: {props.rules.rule}</Paragraph>
            <Paragraph> Source: {props.rules.source}</Paragraph>
            {
                liked
                ?
                <Button onClick={() => { props.unlike(props.rules.id); setLiked(false)}} zIndex={15}>make unliked</Button>
                :
                <Button onClick={() => { props.like(props.rules.id); setLiked(true)} } zIndex={10}>make liked</Button>
            }
            
        </StyledRule>
    )
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