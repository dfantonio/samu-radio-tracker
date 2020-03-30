import { store } from '../index';

describe('Teste de execução do close da store', () => {
  it('Chamada da função de close', () => {
    store.close();
  });
});
