import { emailValid } from '../email';
describe('CPF tests', () => {
  it('Valid', () => {
    expect(emailValid('teste@email.com')).toBe(true);
  });
  it('Invalid', () => {
    expect(emailValid('testeemail.com')).toBe(false);
  });
  it('Undefined', () => {
    expect(emailValid(undefined)).toBe(false);
  });
});
