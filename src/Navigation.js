import React, { Component } from 'react'
import './Navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                <div className='navigation__logo'>LOGO FERENGI</div>
                
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <a className='navigation__link' href='/random'>Random rules</a>
                    </li>
                    <li className='navigation__item'>
                        <a className='navigation__link' href='/rules'>List of rules</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
