// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import Button from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings';

// IMPORT SVG START
import Arrow from '../../../../assets/icon/arrow-down.svg';

// CREATE NEW COMPONENT
const AnimationClickComponent = props => {
  const { click, secondary } = props;

  const scroll = e => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  };
  return (
    <>
      <Button
        role="button"
        theme={theme}
        secondary={secondary ? 1 : 0}
        onClick={() => scroll(click)}
      >
        <Arrow />
      </Button>
    </>
  );
};

AnimationClickComponent.propTypes = {
  secondary: PropTypes.bool,
  click: PropTypes.string.isRequired,
};

AnimationClickComponent.defaultProps = {
  secondary: false,
};

export default AnimationClickComponent;
