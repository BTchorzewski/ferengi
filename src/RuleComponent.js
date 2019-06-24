import React from 'react'

const RuleComponent = (props) => {
    return (
        <div className='rule'>
            <p className='rule__number'>Number: {props.data.number}</p>
            <p className='rule__rule'>Rule: {props.data.rule}</p>
            <p className='rule__source'> Source: {props.data.source}</p>
        </div>
    )
}



export default RuleComponent;