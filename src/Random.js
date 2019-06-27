import React, { Component } from 'react'
import './Random.css';
import {RandomMachineContainer} from './RandomMachineContainer'

export default class Random extends Component {
    render() {
        return (
            <div className='Random'>
                <RandomMachineContainer /> 
            </div>
        )
    }
}
