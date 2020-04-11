import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

/**
 * @author Antônio Della Flora
 * @description Menu dropdown
 * @param {object} config
 * @param {func} config.onChange - callback
 * @param {array} config.array - array das opções
 * @param {func} config.getId - Função usada para definir o id de cada opção
 * @param {func} config.renderLabel - Função que define o label de cada opção
 * @param {*} config.placeholder - placeholder
 * @param {*} config.selected - Valor atual
 * @param {*} config.name - nome no event.name
 */
const SelectInput = ({
  array,
  onChange,
  renderLabel,
  selected,
  getId,
  placeholder,
  name,
}) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="Select-options">{placeholder}</InputLabel>
      <Select name={name} label={placeholder} value={selected} onChange={onChange}>
        {array.map(e => (
          <MenuItem key={getId(e)} value={getId(e)}>
            {renderLabel(e)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  array: PropTypes.array,
  getId: PropTypes.func,
  renderLabel: PropTypes.func,
  placeholder: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
};

SelectInput.defaultProps = {
  array: [],
  getId: () => 'teste',
  renderLabel: () => 'Label',
  placeholder: '',
  selected: '',
  name: '',
};

export default SelectInput;
