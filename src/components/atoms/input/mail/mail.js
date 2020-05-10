import React from 'react';
import { Mail, PlaceholderDiv, Input } from './style/style';
import theme from '../../../../layouts/theme/settings';

class InputMailComponent extends React.Component {
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
    const { mail } = items;
    return (
      <>
        {mail.map(item => (
          <>
            <Mail theme={theme} secondary={secondary ? 1 : 0}>
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
            </Mail>
          </>
        ))}
      </>
    );
  }
}

export default InputMailComponent;
