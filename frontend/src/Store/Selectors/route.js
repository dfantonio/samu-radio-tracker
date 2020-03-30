import { createSelector } from "reselect";

/**
 * @typedef Header
 * @property {boolean} displayLogo
 * @property {string} title
 * @property {string} image
 */

/**
 * @typedef Grid
 * @property {Header} header
 * @property {object} footer
 */
function getGrid(pathname, name) {
  return (
    {
      "/": {
        header: {
          displayLogo: true
        },
        footer: {}
      },
      "/codeconfirm": {
        header: {
          displayLogo: true
        },
        footer: {}
      },
      "/register": {
        header: {
          displayLogo: true,
          title: name
            ? ["Fala aí, ", name + "!"]
            : ["Fala aí! \nSeja ", "bem-vindo!"]
        },
        footer: {}
      },
      "/success": {
        header: {
          displayLogo: true
        },
        footer: {}
      },
      "/failure": {
        header: {
          displayLogo: true
        },
        footer: {}
      },
      "/alreadyregistered": {
        header: {
          displayLogo: true
        },
        footer: {}
      }
    }[pathname] || {}
  );
}

export const gridSelector = createSelector(
  state => state.router.location.pathname,
  state => state.user.name,
  (pathname, name) => getGrid(pathname, name)
);
