export const emptyErrors = (errors = []) => {
  const properties = Object.keys(errors);

  return properties.reduce((obj, item) => {
    return {
      ...obj,
      [item]: '',
    };
  }, {});
};
