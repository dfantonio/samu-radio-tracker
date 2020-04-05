import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export default makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    marginTop: theme.spacing(8),
    '& .MuiTextField-root': {
      margin: theme.spacing(1) + 'px' + ' 0px'
    }
  },
  contents: {
    display: 'contents'
  }
}));

export const Form = styled.form`
  margin-top: 50px;
  align-self: start;
  min-height: 400px;
  width: 100%;

  & .MuiFormControl-root {
    margin: 10px 0px;
  }
`;
