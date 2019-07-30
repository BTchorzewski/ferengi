import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
    width: 3.5rem;
    height: .3rem;
    background-color: green;
    :not(:last-child) {
        margin-bottom:.4rem
    }
`;

const Burger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 1;
    margin-left: 2rem;
    cursor: pointer;
    ${Line}:nth-child(1) {
        background-color: ${ ({isOpen}) => isOpen ? 'yellow' : 'red'};
    }
    ${Line}:nth-child(2) {
        background-color: ${ ({isOpen}) => isOpen ? 'yellow' : 'red'};
    }
    ${Line}:nth-child(3) {
        background-color: ${ ({isOpen}) => isOpen ? 'yellow' : 'red'};
    }
`;


export default function BurgerMenu({ isOpen, handleClick }) {
    console.log('isOpen is: ', isOpen)
    return (
        <Burger isOpen={isOpen} onClick={()=> handleClick()}>
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </Burger>
    )
}

