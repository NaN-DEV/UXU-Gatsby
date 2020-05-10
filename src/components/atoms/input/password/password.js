import React from 'react';
import { PasswordContainer, PlaceholderDiv, Input } from './style/style';
import theme from '../../../../layouts/theme/settings';

class InputPasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderActive: false,
      value: '',
    };
  }

  onFocusInput = () => {
    this.setState({ placeholderActive: true });
  };

  onBlurInput = () => {
    const { value } = this.state;
    if (value.length === 0) {
      this.setState({ placeholderActive: false });
    } else {
      this.setState({ placeholderActive: true });
    }
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { placeholderActive } = this.state;
    const { items, secondary } = this.props;
    const { password } = items;
    return (
      <>
        {password.map(item => (
          <>
            <PasswordContainer theme={theme} secondary={secondary ? 1 : 0}>
              <Input
                type="mail"
                theme={theme}
                onBlur={this.onBlurInput}
                onFocus={this.onFocusInput}
                onChange={this.handleChange}
              />
              <PlaceholderDiv
                type="search"
                theme={theme}
                active={placeholderActive}
                secondary={secondary ? 1 : 0}
                dangerouslySetInnerHTML={{ __html: item.placeholder }}
              />
            </PasswordContainer>
          </>
        ))}
      </>
    );
  }
}

export default InputPasswordComponent;
