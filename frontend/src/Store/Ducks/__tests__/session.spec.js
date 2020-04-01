import sessionReducer, { Creators } from '../session';

describe('Session Reducer Tests', () => {
  it('call successSetToken', () => {
    sessionReducer(undefined, Creators.successSetToken());
  });
});
