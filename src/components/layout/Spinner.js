import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  animation: ${rotate} .75s linear infinite;
  padding: 2rem 1rem;
  font-size: 2rem;
`

export const Spinner = () => {
  return (
    <StyledSpinner>Loading...</StyledSpinner>
  )
}

export default Spinner;