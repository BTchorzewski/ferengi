import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                <div className='navigation__logo'>LOGO FERENGI</div>
                
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <Link className='navigation__link' to='/random'>Random rules</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link className='navigation__link' to='/rules'>List of rules</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
