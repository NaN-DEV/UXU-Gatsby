// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import Row from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings';

// CREATE NEW COMPONENT
const RowComponent = props => {
  const { children, style, className } = props;
  return (
    <>
      <Row style={style} className={className} theme={theme}>
        {children}
      </Row>
    </>
  );
};

export default RowComponent;

RowComponent.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
};

RowComponent.defaultProps = {
  style: null,
  children: null,
  className: null,
};
