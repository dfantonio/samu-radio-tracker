import React from 'react';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import PropTypes from 'prop-types';

export default function SubmitButton({ loading, success, error, onClick }) {
  const classes = useStyles();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonError]: error
  });

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={onClick}
        >
          Salvar
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}

SubmitButton.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

SubmitButton.defaultProps = {
  success: false,
  loading: false,
  error: false
};
