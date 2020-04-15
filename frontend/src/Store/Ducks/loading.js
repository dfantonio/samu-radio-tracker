import { createReducer, createActions } from 'reduxsauce';

/* Action Creators start */
export const { Types, Creators } = createActions({
  startLoading: ['data'],
  stopLoading: ['data'],
});

/* Initial State */
const initialState = {
  status: { get: 0 },
  radio: { get: 0 },
  bateria: { get: 0 },
  local: { get: 0 },
  profissao: { get: 0 },
  emprestimo: { get: 0, finish: 0, add: 0 },
};

/**
 *  {
 *    object: "emprestimos",
 *    method: "get"
 *  }
 */
function startLoading(state, { data }) {
  console.log(data);
  return {
    ...state,
    [data.object]: {
      ...state[data.object],
      [data.method]: state[data.object][data.method] + 1,
    },
  };
}

function stopLoading(state, { data }) {
  return {
    ...state,
    [data.object]: {
      ...state[data.object],
      [data.method]: state[data.object][data.method] - 1,
    },
  };
}

export const loading = {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading,
};

export default createReducer(initialState, loading);
