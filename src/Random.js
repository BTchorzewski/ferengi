import React, { Component } from 'react'
import './Random.css';
import RandomMachine from './RandomMachine'

export default class Random extends Component {
    render() {
        return (
            <div className='Random'>
                <RandomMachine /> 
            </div>
        )
    }
}
