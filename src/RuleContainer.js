import React, { useState } from 'react';
import { changeToLiked, changeToUnliked } from './redux/actions';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
const Rule = (props) => {
    // used hooks to update container
    const [ click, setClick] = useState(false)
    return (
        <li key={props.rules.id} className='rule'>
            <p className='rule__number'>Number: {props.rules.number}</p>
            <p className='rule__rule'>Rule: {props.rules.rule}</p>
            <p className='rule__source'> Source: {props.rules.source}</p>
            <p className='rule__like'>isLiked: {JSON.stringify(props.rules.isLiked)}</p>
            <button onClick={() => { 
                props.like(props.rules.id) 
                setClick(true)
            }} >Like</button>
            <button onClick={() => { 
                props.unlike(props.rules.id) 
                setClick(false)
                }}>Unlike</button>
        </li>
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