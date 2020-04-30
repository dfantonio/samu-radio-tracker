import React from 'react';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import PropTypes from 'prop-types';
import * as styles from './styles';

export default function SubmitButton({ loading, success, error, onClick, fullWidth }) {
  const classes = useStyles();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonError]: error,
  });

  return (
    <div className={classes.root}>
      <styles.Error>{error}</styles.Error>
      <styles.Wrapper fullWidth={fullWidth}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={onClick}
        >
          Salvar
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </styles.Wrapper>
    </div>
  );
}

SubmitButton.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

SubmitButton.defaultProps = {
  fullWidth: false,
  success: false,
  loading: false,
  error: '',
};
