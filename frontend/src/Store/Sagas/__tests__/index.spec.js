import sagas from '..';

describe('All Sagas tests', () => {
  test('Teste de integração de todos os sagas', () => {
    const gen = sagas();

    gen.next();
  });
});
