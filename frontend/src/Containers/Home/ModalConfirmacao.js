import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const Modal = ({ isVisible, onConfirm, onCancel, data }) => {
  const { bem: { tipo, numero_serial } = {}, local: { nome } = {} } = data;

  return (
    <div>
      <Dialog open={isVisible} onClose={onCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirmar devolução</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você tem certeza que deseja fazer a devolução do seguinte item:
          </DialogContentText>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} sm={6}>
              <TextField
                disabled
                value={numero_serial}
                variant="outlined"
                margin="dense"
                id="numero_serial"
                label="Número de série"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled
                value={tipo}
                variant="outlined"
                margin="dense"
                id="bem-tipo"
                label="Tipo"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled
                value={nome}
                variant="outlined"
                margin="dense"
                id="local"
                label="Local"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={onConfirm} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Modal.propTypes = {
  data: PropTypes.object,
  isVisible: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

Modal.defaultProps = {
  data: {},
  isVisible: true,
  onConfirm: () => {},
  onCancel: () => {},
};
export default Modal;
