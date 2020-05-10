import React from 'react';
import { Button, StyledLink } from './style/style';
import theme from '../../../../layouts/theme/settings';

const ButtonTextComponent = props => {
  const { link, onClick, title, className, style, secondary } = props;
  return (
    <>
      {link ? (
        <StyledLink
          to={link}
          style={style}
          theme={theme}
          className={className}
          secondary={secondary ? 1 : 0}
        >
          {title}
        </StyledLink>
      ) : (
        <Button
          style={style}
          theme={theme}
          onClick={onClick}
          className={className}
          secondary={secondary ? 1 : 0}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default ButtonTextComponent;
