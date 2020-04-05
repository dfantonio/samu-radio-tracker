import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles, { Form } from './style';
import { Radio, Battery, Place } from './Forms';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as registerCreators } from '../../Store/Ducks/register';
import { Creators as userCreators } from '../../Store/Ducks/user';

const Home = () => {
  const classes = useStyles();
  const [userChoose, setUserChoose] = useState(1);
  const [payload, setPayload] = useState({});
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.user);
  const { errors, hasErrors, hasSuccess } = useSelector(
    state => state.register
  );
  const { loading } = !!useSelector(state => state.loading);

  const handleButtonClick = () => {
    switch (userChoose) {
      case 1:
        dispatch(registerCreators.startAddRadio(payload));
        break;

      case 2:
        dispatch(registerCreators.startAddBattery(payload));
        break;

      case 3:
        dispatch(registerCreators.startAddLocal(payload));
        break;
    }
  };

  useEffect(() => {
    console.log(payload);
  }, [payload]);

  useEffect(() => {
    setPayload({});
    dispatch(userCreators.startGetStatus());
    if (hasSuccess) dispatch(registerCreators.clearSuccess());
  }, [userChoose]);

  function handleInputChange(event) {
    const { target } = event;
    const value = target.name === 'antena' ? target.checked : target.value;
    const name = target.name;

    if (hasSuccess) dispatch(registerCreators.clearSuccess());

    if (errors[name])
      dispatch(registerCreators.addRegisterErrors({ [name]: '' }));

    setPayload({
      ...payload,
      [name]: value
    });
  }

  function isChoosen(id) {
    return id === userChoose ? 'contained' : 'outlined';
  }

  const inputs = {
    1: (
      <Radio
        onChange={handleInputChange}
        status={status}
        payload={payload}
        errors={errors}
      />
    ),
    2: (
      <Battery
        onChange={handleInputChange}
        status={status}
        payload={payload}
        errors={errors}
      />
    ),
    3: <Place onChange={handleInputChange} errors={errors} />
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <ButtonGroup
          size="large"
          color="primary"
          variant="outlined"
          aria-label="large outlined primary button group"
        >
          <Button onClick={() => setUserChoose(1)} variant={isChoosen(1)}>
            Rádio
          </Button>
          <Button onClick={() => setUserChoose(2)} variant={isChoosen(2)}>
            Bateria
          </Button>
          <Button onClick={() => setUserChoose(3)} variant={isChoosen(3)}>
            Local
          </Button>
        </ButtonGroup>
        <Form noValidate autoComplete="off">
          {inputs[userChoose]}
        </Form>
        <SubmitButton
          error={hasErrors}
          loading={loading}
          success={hasSuccess}
          onClick={handleButtonClick}
        />
      </div>
    </Container>
  );
};

export default Home;
