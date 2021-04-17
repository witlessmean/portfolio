import styled from "styled-components";
import NavMenu from "./NavMenu";
import DarkMode from "./darkMode/DarkMode";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13vh;
  background-color: #273043;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
`;

const Nav = ({ mode, setMode }) => {
  return (
    <>
      <StyledNavBar>
        <DarkMode mode={mode} setMode={setMode} />
        <NavMenu />
      </StyledNavBar>
    </>
  );
};

export default Nav;
