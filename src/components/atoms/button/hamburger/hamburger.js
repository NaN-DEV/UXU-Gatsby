// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings';

// IMPORT COMPONENT
import { Button, Box } from './style/style';

// CREATE NEW COMPONENT

class ButtonHamburgerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    if (hover) {
      this.setState({ hover: false });
    } else {
      this.setState({ hover: true });
    }
  }

  render() {
    const { secondary, onClick, clouse, className } = this.props;
    const { hover } = this.state;
    return (
      <>
        <Button
          theme={theme}
          onClick={onClick}
          className={className}
          clouse={clouse ? 1 : 0}
          secondary={secondary ? 1 : 0}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <Box theme={theme} secondary={secondary} toggleHover={hover} clouse={clouse ? 1 : 0}>
            <span />
            <span />
            <span />
          </Box>
        </Button>
      </>
    );
  }
}

ButtonHamburgerComponent.propTypes = {
  clouse: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

ButtonHamburgerComponent.defaultProps = {
  onClick: null,
  clouse: false,
  className: null,
  secondary: false,
};

export default ButtonHamburgerComponent;
