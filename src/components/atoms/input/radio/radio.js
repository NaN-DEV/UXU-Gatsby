// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLES
import { Wrapper, InputRadioBox, Label, Input } from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings';

// CREATE NEW COMPONENT

const Radio = props => {
  const { secondary, items, classNameRadio } = props;

  return (
    <>
      <Wrapper theme={theme} className={classNameRadio} secondary={secondary ? 1 : 0}>
        {items.map((item, i) => (
          <InputRadioBox theme={theme} secondary={secondary ? 1 : 0}>
            <Input
              theme={theme}
              secondary={secondary ? 1 : 0}
              type="radio"
              id={item.label + i}
              value={item.label}
              name={item.name}
              defaultChecked={item.checked}
            />
            <Label theme={theme} for={item.label + i} secondary={secondary ? 1 : 0}>
              {item.label}
            </Label>
          </InputRadioBox>
        ))}
      </Wrapper>
    </>
  );
};

export default Radio;
