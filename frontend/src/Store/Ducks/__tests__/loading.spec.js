import loadingReducer, { Creators } from '../loading';

test('start loading', () => {
  loadingReducer(undefined, Creators.startLoading());
});

test('stop loading', () => {
  loadingReducer(undefined, Creators.stopLoading());
});
