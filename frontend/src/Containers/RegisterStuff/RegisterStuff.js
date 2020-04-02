import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles, { Form } from './style';
import { Radio, Battery, Place } from './Forms';
import SubmitLoader from '../../Components/SubmitButton/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as registerCreators } from '../../Store/Ducks/register';
import { Creators as userCreators } from '../../Store/Ducks/user';

const Home = () => {
  const classes = useStyles();
  const initialStatus = { status: 3 };
  const [userChoose, setUserChoose] = useState(1);
  const [payload, setPayload] = useState(initialStatus);
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.user);

  //Start loader button config
  const timer = React.useRef();

  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleButtonClick = () => {
    dispatch(registerCreators.startAddRadio(payload));
    setSuccess(false);
    setLoading(true);
    timer.current = setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  };
  //End loader button config

  useEffect(() => {
    console.log(payload);
  }, [payload]);

  useEffect(() => {
    setPayload(initialStatus);
    setSuccess(false);
    setLoading(false);
    dispatch(userCreators.startGetStatus());
  }, [userChoose]);

  function handleInputChange(event) {
    const { target } = event;
    const value = target.name === 'antena' ? target.checked : target.value;
    const name = target.name;

    setSuccess(false);

    setPayload({
      ...payload,
      [name]: value
    });
  }

  function isChoosen(id) {
    return id === userChoose ? 'contained' : 'outlined';
  }

  //TODO: Ver o efeito da prop required nos inputs
  const inputs = {
    1: <Radio onChange={handleInputChange} status={status} payload={payload} />,
    2: <Battery onChange={handleInputChange} />,
    3: <Place onChange={handleInputChange} />
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
        <SubmitLoader
          loading={loading}
          success={success}
          onClick={handleButtonClick}
        />
      </div>
    </Container>
  );
};

export default Home;
