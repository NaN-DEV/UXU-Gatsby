// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import Footer from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';
import Logo from '../../atoms/logo/logo';
import List from '../../molecules/list/list';

// CREATE NEW COMPONENT
const FooterComponent = props => {
  const { links, copyright } = props;
  return (
    <Footer theme={theme}>
      <Row className="row">
        <Logo className="logo" height="30px" link="/" />
        <p>{copyright}</p>
        <List level items={links} />
      </Row>
    </Footer>
  );
};

export default FooterComponent;

FooterComponent.propTypes = {
  copyright: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

FooterComponent.defaultProps = {
  copyright: 'Copyright 2016-2020',
};
