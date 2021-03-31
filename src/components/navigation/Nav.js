import styled from 'styled-components';
import NavMenu from './NavMenu';

const StyledNavBar = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 13vh;
background-color: #273043;               
-webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
-moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
`

const Nav = () => {
    return (
<>
<StyledNavBar>
        <NavMenu />
</StyledNavBar>
</>
    )
}

export default Nav
