import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 120rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: inherit;
  font-size: ${props => props.theme.fonts.size.medium};
  color: ${props => props.theme.fonts.colors.primary};
  &:active {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export default Button;
