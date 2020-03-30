import loadingReducer, { Creators } from '../../Reducers/loading';

test('start loading', () => {
  loadingReducer(undefined, Creators.startLoading());
});

test('stop loading', () => {
  loadingReducer(undefined, Creators.stopLoading());
});
