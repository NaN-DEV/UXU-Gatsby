// IMPORT PLUGIN START
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE START
import Button from './style/style';
import theme from '../../../../layouts/theme/settings';

// CREATE NEW COMPONENT
const ButtonSumbitComponent = props => {
  const { title, secondary, style, className } = props;

  return (
    <>
      <Button
        type="submit"
        theme={theme}
        style={style}
        className={className}
        secondary={secondary ? 1 : 0}
      >
        {title}
      </Button>
    </>
  );
};

export default ButtonSumbitComponent;

ButtonSumbitComponent.propTypes = {
  style: PropTypes.string,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ButtonSumbitComponent.defaultProps = {
  style: null,
  className: null,
  secondary: false,
};
