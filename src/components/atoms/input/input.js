// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLES
import { Input, Label } from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"

// IMPORT COMPONENT
import Mail from "./mail/mail"
import Radio from "./radio/radio"
import Search from "./search/search"
import Classic from "./classic/classic"
import Checkbox from "./checkbox/checkbox"
import Password from "./password/password"

// CREATE NEW COMPONENT
const InputComponent = props => {
  const { items, secondary, classNameRadio } = props
  return (
    <>
      <Input theme={theme} secondary={secondary ? 1 : 0}>
        {items.label && <Label secondary={secondary}>{items.label}</Label>}
        {items.mail && <Mail items={items} secondary={secondary} />}
        {items.radio && (
          <Radio
            page={items.page}
            items={items.radio}
            secondary={secondary}
            classNameRadio={classNameRadio}
          />
        )}
        {items.search && <Search items={items.search} secondary={secondary} />}
        {items.type === "Classic" && (
          <Classic items={items} secondary={secondary} />
        )}
        {items.password && <Password items={items} secondary={secondary} />}
        {items.type === "Checkbox" && (
          <Checkbox items={items} page={items.page} secondary={secondary} />
        )}
      </Input>
    </>
  )
}

export default InputComponent
