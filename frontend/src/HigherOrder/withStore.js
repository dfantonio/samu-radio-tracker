/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Creators as userCreators } from '../Store/Ducks/lists';

export default function withStore(WrappedComponent) {
  const mapStateToProps = state => ({
    isFetchingLists: state.loading,
    status: state.lists.status,
    radios: state.lists.radios,
    baterias: state.lists.baterias,
    locais: state.lists.locais,
    profissoes: state.lists.profissoes,
  });

  const mapDispatchToProps = dispatch => ({
    getStatus: () => dispatch(userCreators.startGetStatus()),
    getRadios: () => dispatch(userCreators.startGetRadios()),
    getBaterias: () => dispatch(userCreators.startGetBaterias()),
    getLocais: () => dispatch(userCreators.startGetLocais()),
    getProfissoes: () => dispatch(userCreators.startGetProfissoes()),
  });

  class PopulateStore extends PureComponent {
    updateStatus() {
      this.props.getStatus();
    }

    updateRadios() {
      this.props.getRadios();
    }

    updateBaterias() {
      this.props.getBaterias();
    }

    updateLocais() {
      this.props.getLocais();
    }

    updateProfissoes() {
      this.props.getProfissoes();
    }

    render() {
      const {
        isFetchingLists: {
          status: { get: statusGetLoading },
          radio: { get: radiosGetLoading },
          bateria: { get: bateriasGetLoading },
          local: { get: locaisGetLoading },
          profissao: { get: profissoesGetLoading },
        },
        status,
        radios,
        baterias,
        locais,
        profissoes,
      } = this.props;

      if (!statusGetLoading && !status.length) this.updateStatus();
      if (!radiosGetLoading && !radios.length) this.updateRadios();
      if (!bateriasGetLoading && !baterias.length) this.updateBaterias();
      if (!locaisGetLoading && !locais.length) this.updateLocais();
      if (!profissoesGetLoading && !profissoes.length) this.updateProfissoes();

      return <WrappedComponent {...this.props} />;
    }
  }

  const ProductModals = connect(mapStateToProps, mapDispatchToProps)(PopulateStore);

  return compose(withRouter)(ProductModals);
}
