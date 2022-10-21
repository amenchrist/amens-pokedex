import React  from 'react';
import Scroll from './Scroll';
import { StyledContainer } from './styledComponents';
import { Outlet } from 'react-router-dom';



export default function PokeList({content}) {

  return (
    <StyledContainer maxWidth="md">
      <Scroll >
        <Outlet />
      </Scroll>
    </StyledContainer>
  );
}