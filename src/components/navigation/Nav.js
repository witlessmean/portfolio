import { useContext, useState, useEffect } from 'react';
import styled from "styled-components";
import NavMenu from "./NavMenu";
import DarkMode from "./darkMode/DarkMode";
import { ModeContext } from './darkMode/ModeContext';

const StyledNavBar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  position: sticky;
  top: 0;
`;

const Nav = () => {
  
  const { mode } = useContext(ModeContext);

  const conditionalColor = { backgroundColor: mode ? "#023047" : "#560BAD" }
  
  return (
    <>
      <StyledNavBar style={conditionalColor} >
        <DarkMode />
        <NavMenu />
      </StyledNavBar>
    </>
  );
};

export default Nav;
