import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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



export const formStyles = {
  
  iconStyles: {
    fontSize: "25px"
  },
  inputStyles: { style: {fontSize: "2rem", lineHeight: "1.4", fontWeight: "800" } 
}, 
buttonStyles:  {fontSize: "1.6rem"} 
  };


export const theme = createMuiTheme({
  overrides: {
    MuiInput: {
     root: {
      fontSize: "2rem", 
      margin: "2vh 0",
      fontWeight: "800" 
     }, 
   }, 
   MuiButton: {
     root: {
      fontSize: "1.6rem",
      fontWeight: 'bolder',
      '&:hover': {
        boxShadow: '0 0 0 0.2rem rgba(0,120,255,.8)',
      },
    }
   }
  },
   props: {
     MuiInputLabel: {
       style: { fontSize: "2.5rem", fontWeight: "900" }
     },
     MuiTextField: {
       style: { fontSize: "2.5rem" }
     },
    },
});

export const CustomCardButton = withStyles({
  root: {
    width: '5vw',
    height: '2.5em',
    fontWeight: 'bolder',
    fontSize: 17,
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#c4dbf5',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,120,255,.8)',
    },
  },
})(Button);