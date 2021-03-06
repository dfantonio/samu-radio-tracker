import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

function Tabela({ data, isLoading, updateTable, onChange }) {
  return (
    <MaterialTable
      columns={[
        { title: 'Objeto', field: 'bem.tipo' },
        { title: 'Número de série', field: 'bem.numero_serial' },
        { title: 'Local', field: 'local.nome' },
        {
          title: 'Data do empréstimo',
          field: 'emprestado_em',
        },
      ]}
      isLoading={isLoading}
      localization={{
        pagination: {
          labelRowsSelect: 'linhas',
          firstTooltip: 'Primeira página',
          previousTooltip: 'Página anterior',
          nextTooltip: 'Página posterior',
          lastTooltip: 'Última página',
        },
        header: { actions: 'Ação' },
        toolbar: { searchPlaceholder: 'Pesquisar' },
        body: {
          emptyDataSourceMessage: isLoading ? 'Carregando' : 'Sem empréstimos pendentes',
        },
      }}
      data={data}
      actions={[
        {
          icon: 'refresh',
          tooltip: 'Recarregar',
          isFreeAction: true,
          onClick: updateTable,
        },
        {
          icon: 'assignment_turned_in',
          tooltip: 'Finalizar o empréstimo',
          onClick: (event, rowData) => onChange(rowData),
        },
      ]}
      title="Equipamentos em uso"
    />
  );
}

Tabela.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  updateTable: PropTypes.func,
  onChange: PropTypes.func,
};

Tabela.defaultProps = {
  data: [],
  isLoading: false,
  updateTable: () => {},
  onChange: () => {},
};

export default Tabela;
