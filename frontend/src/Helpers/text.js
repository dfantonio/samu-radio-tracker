import pluralize from 'pluralize';

export function textFormat(text = '') {
  return text.replace(/[\d]/g, '');
}

export function toSingular(word) {
  pluralize.addSingularRule(/profissoes$/i, 'profissao');
  pluralize.addSingularRule(/locais$/i, 'local');
  const a = pluralize.singular(word);

  return a;
}
