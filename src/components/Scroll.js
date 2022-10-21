import React from 'react';
import { useStateContext } from '../ContextProvider';
import { StyledScrollableDiv } from './styledComponents';


const Scroll = ({children}) => {
  const { setLoadNext } = useStateContext()
  return (
    <StyledScrollableDiv onScroll={() => setLoadNext(true)}>
      {children}
    </StyledScrollableDiv>
    );

};

export default Scroll;
