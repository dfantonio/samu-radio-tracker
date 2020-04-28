import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import styled from 'styled-components';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonError: {
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[800],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export const Error = styled.div`
  font-size: 18px;
  color: ${red[600]};
  text-align: center;
`;
