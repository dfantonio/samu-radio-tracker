import React from "react";

import { useSelector } from "react-redux";
import { gridSelector } from "../../Store/Selectors";

import PropTypes from "prop-types";

/**
 * @description Encapsula as rotas, determinando margens e selecionando se é para exibir o Header e Footer
 * @author Guilherme Zordan, Henrique Backes
 * @copyright 09/2019
 * @param {object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
function Grid({ children }) {
  // const { header, footer } = useSelector(gridSelector);

  // function renderFooter() {
  //   return footer && <Footer logo={logos.large} />;
  // }

  // function renderHeader() {
  //   return (
  //     header && (
  //       <Header logo={logos.large} title={header.title} image={header.image} />
  //     )
  //   );
  // }

  return (
    <>
      {/* {renderHeader()} */}
      {children}
      {/* {renderFooter()} */}
    </>
  );
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.element,
    PropTypes.node
  ])
};

export default Grid;
