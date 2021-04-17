import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;  
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
body{
  font-size: 1.6rem;
  margin: 0;

  background-color: ${ (props) => {
            return props.mode === true ? '#181818' : '#FFFAFA'
    } 
      };
    color: ${ (props) => {
            return props.mode === true ? 'white' : 'black'
    } 
      };

   h2 {
     margin-top: 15vh;
   }
}`;

export const StyledHR = styled.hr`
  margin-top: 1vh;
  margin-bottom: 4vh;
  border: 0;
  height: 0.1vh;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0)
  );
`;

export const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[4],
    fontSize: 11,
    fontWeight: "900",
  },
}))(Tooltip);

export const CustomMenuItem = withStyles(() => ({
  root: {
    fontSize: "1.6rem",
    fontWeight: 600,
  },
}))(MenuItem);

export const formStyles = {
  iconStyles: {
    fontSize: "25px",
  },
  inputStyles: {
    style: { fontSize: "2rem", lineHeight: "1.4", fontWeight: "800" },
  },
  buttonStyles: { fontSize: "1.6rem" },
};

export const CustomCardButton = withStyles({
  root: {
    width: "5vw",
    height: "2.5em",
    fontWeight: "bolder",
    fontSize: 17,
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#c4dbf5",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,120,255,.8)",
    },
  },
})(Button);


////Icons////
//########//
export const CustomSunIcon = withStyles({
  root: {
    fontSize: '3.5rem',
    color: '#f7f7f7'
  }
})(Brightness7Icon);

export const CustomMoonIcon = withStyles({
  root: {
    fontSize: '3.5rem',
    color: '#f7f7f7'
  }
})(Brightness4Icon);

