import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  letter-spacing: .8px;
  color: darkblue;
  font-size: 4.2rem;
`
const StyledHeader = styled.header`
  text-align: center;
  padding: 1rem;
  background: yellow;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>Weather App</StyledH1>
      <p>
        Please add how to use the app here.
      </p>
    </StyledHeader>
  )
}

export default Header;