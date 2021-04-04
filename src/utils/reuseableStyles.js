import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const StyledHR = styled.hr`
margin-top: 1vh;
margin-bottom: 1vh;
border: 0;
height: 0.1vh;
background-image: linear-gradient(
  to right,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 0.25),
  rgba(0, 0, 0, 0)
);
`
export const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[4],
    fontSize: 11,
    fontWeight: '900'
  },
}))(Tooltip);





