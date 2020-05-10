// IMPORT PLUGIN START
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE START
import { Button, StyledLink } from './style/style';
import theme from '../../../../layouts/theme/settings';

// IMPORT SVG START
import Arrow from '../../../../assets/icon/arrow-down.svg';

// CREATE NEW COMPONENT

const ButtonMoreComponent = props => {
  const { link, secondary, style, className } = props;

  return (
    <>
      {link ? (
        <>
          <StyledLink
            to={link}
            style={style}
            className={className}
            secondary={secondary ? 1 : 0}
            theme={theme}
          >
            Zobacz więcej <Arrow />
          </StyledLink>
        </>
      ) : (
        <>
          <Button secondary={secondary ? 1 : 0} theme={theme}>
            Zobacz więcej <Arrow />
          </Button>
        </>
      )}
    </>
  );
};

export default ButtonMoreComponent;

ButtonMoreComponent.propTypes = {
  link: PropTypes.string,
  style: PropTypes.string,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

ButtonMoreComponent.defaultProps = {
  link: null,
  style: null,
  className: null,
  secondary: false,
};
