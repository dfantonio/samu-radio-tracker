import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import styled from 'styled-components';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
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

export const Wrapper = styled.div`
  margin: 8px;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;
