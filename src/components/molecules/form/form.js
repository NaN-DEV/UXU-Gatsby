// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLES
import { Form, H1 } from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings';

// IMPORT COMPONENT
import Input from '../../atoms/input/input';
import TextArea from '../../atoms/textarea/textarea';
import Button from '../../atoms/button/button';

// CREATE NEW COMPONENT
const FormComponent = props => {
  const { items, secondary, className, classNameRadio, title } = props;

  return (
    <Form secondary={secondary ? 1 : 0} theme={theme} className={className}>
      {title && (
        <H1 theme={theme} secondary={secondary ? 1 : 0}>
          {title}
        </H1>
      )}
      {items &&
        items.map(item => {
          if (item.input) {
            return (
              <Input
                items={item.input}
                key={item.id}
                classNameRadio={classNameRadio}
                secondary={secondary}
              />
            );
          }
          if (item.textArea) {
            return <TextArea items={item} key={item.id} secondary={secondary} />;
          }
          return <Button title={item.button.title} key={item.id} secondary={secondary} submit />;
        })}
    </Form>
  );
};

export default FormComponent;
