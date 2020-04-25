import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  letter-spacing: .8px;
  font-size: 4.2rem;
  color: ${props => props.primary ? 'mediumseagreen' : '#c3c3c3'};
`
const StyledHeader = styled.header`
  text-align: center;
  padding: 1rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1 primary>Weather App</StyledH1>
      <p>
        Please add how to use the app here.
      </p>
    </StyledHeader>
  )
}

export default Header;