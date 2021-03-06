import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import SelectInput from '../../Components/SelectInput/SelectInput';
import useStyles from './styles';
import { AutocompleteInput, SubmitButton } from '../../Components';
import Grid from '@material-ui/core/Grid';
import Table from './Table';
import Modal from './ModalConfirmacao';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as listCreators } from '../../Store/Ducks/lists';
import { Creators as registerCreators } from '../../Store/Ducks/register';

const opcoes = [
  { id: 0, tipo: 'Rádio' },
  { id: 1, tipo: 'Bateria' },
  { id: 2, tipo: 'Carregador' },
  { id: 3, tipo: 'Acessório' },
];

function Home() {
  const [productType, setProductType] = useState();
  const [modalVisible, setModal] = useState(false);
  const [selectedProduct, setProduct] = useState({});
  const [payload, setPayload] = useState({});
  const { emprestimos, locais, profissoes, radios, baterias, carregadores } = useSelector(
    state => state.lists
  );
  const {
    radio: { get: radioGetLoading },
    bateria: { get: bateriaGetLoading },
    profissao: { get: profissaoGetLoading },
    local: { get: localGetLoading },
    carregador: { get: carregadorGetLoading },
    emprestimo: {
      get: emprestimoGetLoading,
      add: emprestimoAddLoading,
      finish: emprestimoFinishLoading,
    },
  } = useSelector(state => state.loading);
  const { errors } = useSelector(state => state.register);
  const {
    local_id: localError,
    profissao_id: profissaoError,
    bem_id: bemError,
    message: messageError,
  } = errors;
  const classes = useStyles();
  const dispatch = useDispatch();

  const optionsLoading = radioGetLoading || bateriaGetLoading || carregadorGetLoading;

  const optionsArray = () => {
    switch (productType) {
      case 0:
        return radios;
      case 1:
        return baterias;
      case 2:
        return carregadores;
      default:
        return [];
    }
  };

  const updateEmprestimosList = () =>
    dispatch(listCreators.startGetEmprestimos({ status: 1 }));

  useEffect(() => {
    updateEmprestimosList();
    dispatch(listCreators.startGetProfissoes());
    dispatch(listCreators.startGetLocais());
  }, []);

  useEffect(() => {
    switch (productType) {
      case 0:
        dispatch(listCreators.startGetRadios({ status: 3 }));
        break;
      case 1:
        dispatch(listCreators.startGetBaterias({ status: 3 }));
        break;
      case 2:
        dispatch(listCreators.startGetCarregadores({ status: 3 }));
        break;

      default:
        break;
    }
  }, [productType]);

  function handleInputChange(event) {
    const { target } = event;
    const value = target.name === 'antena' ? target.checked : target.value;
    const name = target.name;

    if (errors[name]) dispatch(registerCreators.addRegisterErrors({ [name]: '' }));
    if (messageError) dispatch(registerCreators.addRegisterErrors({ message: '' }));

    setPayload({
      ...payload,
      [name]: value,
    });
  }

  function handleAddEmprestimo() {
    dispatch(registerCreators.startAddEmprestimo(payload));
  }

  function handleTableChange(data) {
    setProduct(data);
    setModal(true);
  }

  function onModalConfirm() {
    dispatch(
      registerCreators.startFinishEmprestimo({
        emprestimo: selectedProduct.id,
      })
    );
    setModal(false);
  }

  function onModalCancel() {
    setModal(false);
  }

  return (
    <Container className={classes.root} component="main" maxWidth="md">
      <Modal
        isVisible={modalVisible}
        onConfirm={onModalConfirm}
        onCancel={onModalCancel}
        data={selectedProduct}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectInput
            array={opcoes}
            onChange={e => setProductType(e.target.value)}
            renderLabel={e => e.tipo}
            getId={e => e.id}
            selected={productType}
            placeholder="Objeto"
            name="product_type"
            error={!!bemError && productType === undefined && 'Favor selecionar um tipo'}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AutocompleteInput
            loading={!!optionsLoading}
            name="bem_id"
            array={optionsArray()}
            onChange={handleInputChange}
            placeholder="Número de série"
            renderLabel={({ numero_serial }) => numero_serial || ''}
            error={bemError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AutocompleteInput
            loading={!!localGetLoading}
            name="local_id"
            array={locais}
            onChange={handleInputChange}
            placeholder="Destino"
            renderLabel={e => e.nome || ''}
            error={localError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AutocompleteInput
            loading={!!profissaoGetLoading}
            name="profissao_id"
            array={profissoes}
            onChange={handleInputChange}
            placeholder="Cargo responsável"
            renderLabel={({ nome }) => nome || ''}
            error={profissaoError}
          />
        </Grid>
      </Grid>
      <SubmitButton
        error={messageError}
        loading={!!emprestimoAddLoading}
        onClick={handleAddEmprestimo}
      />

      <Table
        data={emprestimos}
        isLoading={!!(emprestimoGetLoading || emprestimoFinishLoading)}
        updateTable={updateEmprestimosList}
        onChange={handleTableChange}
      />
    </Container>
  );
}

export default Home;
