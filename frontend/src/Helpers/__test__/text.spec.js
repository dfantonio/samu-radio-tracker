import { textFormat } from '../text';

describe('text testes', () => {
  it('Válido', () => {
    expect(textFormat('1234')).toBe('');
  });
  it('Válido com caracteres extras', () => {
    expect(textFormat('1234joao')).toBe('joao');
  });
  it('Indefinido', () => {
    expect(textFormat(undefined)).toBe('');
  });
});
