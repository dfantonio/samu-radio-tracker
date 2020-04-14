/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { withStore } from '../../HigherOrder';
import SelectInput from '../../Components/SelectInput/SelectInput';
import useStyles from './styles';
import { AutocompleteInput } from '../../Components';
import Grid from '@material-ui/core/Grid';
import { getEmprestimos } from '../../Store/Services';
import { useApiRequest } from '../../Helpers';
import Table from './Table';
import Modal from './ModalConfirmacao';

// Função para converter o retorno do sequelize em uma data e hora que faça sentido:
// moment(this.getDataValue('criado_em')).format('DD/MM/YYYY h:mm:ss')

const opcoes = [
  { id: 0, tipo: 'Rádio' },
  { id: 1, tipo: 'Bateria' },
  { id: 2, tipo: 'Carregador' },
  { id: 3, tipo: 'Acessório' },
];

function Home({ radios, baterias, locais, profissoes }) {
  const [productType, setProductType] = useState();
  const [modalVisible, setModal] = useState(false);
  const [selectedProduct, setProduct] = useState({});
  const [hasToUpdateTable, setHasToUpdateTable] = useState(false);
  const [payload, setPayload] = useState({});
  const classes = useStyles();

  const optionsArray = () => {
    switch (productType) {
      case 0:
        return radios;
      case 1:
        return baterias;
      default:
        return [];
    }
  };

  const [isLoading, emprestimos] = useApiRequest(
    getEmprestimos,
    { status: 1 },
    hasToUpdateTable,
    () => setHasToUpdateTable(false)
  );

  useEffect(() => {
    setHasToUpdateTable(false);
  }, [isLoading, hasToUpdateTable]);

  useEffect(() => console.log('payload:', payload), [payload]);
  useEffect(() => console.log('selectedProduct:', selectedProduct), [selectedProduct]);

  function handleInputChange(event) {
    const { target } = event;
    const value = target.name === 'antena' ? target.checked : target.value;
    const name = target.name;

    setPayload({
      ...payload,
      [name]: value,
    });
  }

  function handleTableChange(data) {
    setProduct(data);
    setModal(true);
  }

  function onModalConfirm() {
    setModal(false);
  }

  function onModalCancel() {
    setModal(false);
  }

  return (
    <Container className={classes.root} component="main" maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <SelectInput
              array={opcoes}
              onChange={e => setProductType(e.target.value)}
              renderLabel={e => e.tipo}
              getId={e => e.id}
              selected={productType}
              placeholder="Tipo"
              name="product_type"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <AutocompleteInput
              name="bem_id"
              array={optionsArray()}
              onChange={handleInputChange}
              placeholder="Objeto"
              renderLabel={({ numero_serial }) => numero_serial || ''}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <AutocompleteInput
              name="local_id"
              array={locais}
              onChange={handleInputChange}
              placeholder="Destino"
              renderLabel={e => e.nome || ''}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <AutocompleteInput
              name="profissao_id"
              array={profissoes}
              onChange={handleInputChange}
              placeholder="Cargo responsável"
              renderLabel={({ nome }) => nome || ''}
            />
          </Paper>
        </Grid>
      </Grid>
      <Modal
        isVisible={modalVisible}
        onConfirm={onModalConfirm}
        onCancel={onModalCancel}
        data={selectedProduct}
      />
      <Table
        data={emprestimos}
        isLoading={isLoading}
        updateTable={setHasToUpdateTable}
        onChange={handleTableChange}
      />
    </Container>
  );
}

export default withStore(Home);
