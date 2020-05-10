// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import Triangle from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings';

// CREATE NEW COMPONENT
const TriangleIconComponent = props => {
  const { secondary, className } = props;
  return <Triangle theme={theme} className={className} secondary={secondary ? 1 : 0} />;
};

export default TriangleIconComponent;

TriangleIconComponent.propTypes = {
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

TriangleIconComponent.defaultProps = {
  className: null,
  secondary: false,
};
