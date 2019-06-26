import React from 'react'

const RuleComponent = (props) => {
    return (
        <li key={props.data.id} className='rule'>
            <p className='rule__number'>Number: {props.data.number}</p>
            <p className='rule__rule'>Rule: {props.data.rule}</p>
            <p className='rule__source'> Source: {props.data.source}</p>
            { props.data.liked ? <p onClick={() => props.changeLikes(props.data.id)}>liked</p> : <p onClick={() => props.changeLikes(props.data.id)}>unliked</p>}
        </li>
    )
}



export default RuleComponent;