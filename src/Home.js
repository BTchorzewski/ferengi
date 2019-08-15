import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 40vh;
    width: 70%;
    padding: 3rem;
    background-color: ${props => props.theme.colors.secondary};
    border-radius:.3rem;
    box-shadow: 0 1.4rem 4rem rgba(0,0,0,.8);
    color: ${props => props.theme.colors.primaryFont};
    @media screen and (max-width: ${props => props.theme.responsive.tabLand}) {
        width: 100%;
    }
`;

const HeadingPrimary = styled.h1`
    font-size: 3.2rem;
    margin-bottom: 1rem;
    margin-bottom: 2rem;    
`;

const HeadingSecondary = styled.h2`
    font-size: 2.6rem;
    margin-bottom: 2rem;
`;

const Paragraph = styled.p`
    font-size: 1.6rem;
    line-height: 2.2rem;
    margin-bottom: 2rem;
`;

const Link = styled.a`
    display: inline-block;
    &:link,
    &:visited {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.primaryFont};
        text-decoration: none;
        
    }
    &:hover,
    &:active{
        display: block;
        transform: rotateX(360deg);
        transform-origin: top left;
        color: red;
        
    }
`;



export default class Home extends Component {
    render() {
        return (
            <Wrapper>
                <HeadingPrimary>Ferengi - Rules of Acquisition</HeadingPrimary>
                <Paragraph>In the fictional Star Trek universe, the Rules of Acquisition are a collection of sacred business proverbs of the ultra-greedy race known as the Ferengi.
                The first mention of the rules within the Star Trek universe was in "The Nagus", an episode of the TV series Star Trek: Deep Space Nine (Season 1, Episode 10).
                In a later Deep Space Nine episode, "The Maquis: Part 1", Sakonna (a Vulcan) asks Quark (a Ferengi) to explain what a Rule of Acquisition is. He states, "Every Ferengi business transaction is governed by 285 Rules of Acquisition to ensure a fair and honest deal for all parties concerned... well most of them anyway."
                </Paragraph>
                <HeadingSecondary>Background</HeadingSecondary>
                <Paragraph>The first Rule was made by Gint, the first Grand Nagus of the Ferengi Alliance, a role with political, economic, and even quasi-religious duties. The Rules were said to be divinely inspired and sacred (thus furthering the original marketing ploy.)[2]

Although it has been stated within Star Trek that there are 285 Rules,[1][3] not all of them have been stated in canon. Most of the Rules were written by Ira Steven Behr, a writer for Star Trek: Deep Space Nine, in a book The Ferengi Rules of Acquisition (ISBN 0-671-52936-6). The book's cover credits authorship as being "By Quark as told to Ira Steven Behr." Additional rules were published in Legends of the Ferengi (ISBN 0-671-00728-9) by Behr and Robert Hewitt Wolfe, another writer for Star Trek: Deep Space Nine when Behr was the executive producer of the series.</Paragraph>
                <Link href="https://en.wikipedia.org/wiki/Rules_of_Acquisition" target="_blank"> &rarr; More information you find here</Link>
            </Wrapper>
        )
    }
}
