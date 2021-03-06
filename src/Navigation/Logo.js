import React from 'react';
import styled, { keyframes } from 'styled-components';


const LogoBox = styled.div`
    display:flex    
    width: 20px;
    @media screen and (max-width: ${props => props.theme.responsive.tabLand}) {
        & {
           
        }
    }
   
`;

const rotateAnimation = keyframes`
    from {
        transform: rotateY(0);
    }
    to {
        transform: rotateY(360deg);
    }


`;

const Image = styled.img`
    
    width: 100%;
    height: auto;
    animation: ${rotateAnimation} 3s ease-in-out 0s infinite;
`;


const Logo = () => {
    
    return (
        <LogoBox>
            <Image srcSet="/logo_x1.png 1x, /logo_x2.png 2x" alt="Ferengi logo"></Image>
        </LogoBox>
    )
}

export default Logo
