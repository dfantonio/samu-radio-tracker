import { put } from 'redux-saga/effects';

import { addLoader, removeLoader } from '../SagaLoader';
import { Creators } from '../../Ducks/loading';

describe('Loader Tests', () => {
  test('loader deve ser invocado', () => {
    const gen = addLoader();

    expect(gen.next().value).toStrictEqual(put(Creators.startLoading()));
    expect(gen.next().done).toBe(true);
  });

  test('loader deve ser escondido', () => {
    const gen = removeLoader();

    expect(gen.next().value).toStrictEqual(put(Creators.stopLoading()));
    expect(gen.next().done).toBe(true);
  });
});
