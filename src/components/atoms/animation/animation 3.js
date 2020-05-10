// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT START
import Click from './click/click';

// CREATE NEW COMPONENT
const AmimationComponent = props => {
  const { click, secondary } = props;
  return <>{click && <Click click={click} secondary={secondary} />}</>;
};

AmimationComponent.propTypes = {
  click: PropTypes.string,
  secondary: PropTypes.bool,
};

AmimationComponent.defaultProps = {
  click: null,
  secondary: false,
};

export default AmimationComponent;
