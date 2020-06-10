// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT STYLES
import { Input, BoxInput } from "./style/style"

// CREATE NEW COMPONENT

const InputComponent = props => {
  const { item } = props

  if (item.type === "search") {
    return (
      <>
        <Input
          theme={theme}
          type={item.type}
          autoComplete="off"
          name={item.placeholder}
          placeholder={item.placeholder}
        />
      </>
    )
  } else if (item.type === "text") {
    return (
      <>
        <BoxInput
          theme={theme}
          size={item.size ? item.size : "100%"}
          paddingRight={item.paddingRight ? item.paddingRight : "0.3rem"}
          paddingLeft={item.paddingLeft ? item.paddingLeft : "0rem"}
        >
          <Input
            theme={theme}
            type={item.type}
            autoComplete="off"
            name={item.placeholder}
            placeholder={item.placeholder}
          />
        </BoxInput>
      </>
    )
  } else if (item.type === "tel") {
    return (
      <>
        <BoxInput
          theme={theme}
          size={item.size ? item.size : "100%"}
          paddingRight={item.paddingRight ? item.paddingRight : "0.3rem"}
          paddingLeft={item.paddingLeft ? item.paddingLeft : "0rem"}
        >
          <Input
            theme={theme}
            type={item.type}
            autoComplete="off"
            name={item.placeholder}
            placeholder={item.placeholder}
          />
        </BoxInput>
      </>
    )
  } else if (item.type === "email") {
    return (
      <>
        <BoxInput
          theme={theme}
          size={item.size ? item.size : "100%"}
          paddingRight={item.paddingRight ? item.paddingRight : "0.3rem"}
          paddingLeft={item.paddingLeft ? item.paddingLeft : "0rem"}
        >
          <Input
            theme={theme}
            type={item.type}
            autoComplete="off"
            name={item.placeholder}
            placeholder={item.placeholder}
          />
        </BoxInput>
      </>
    )
  } else if (item.type === "number") {
    return (
      <>
        <BoxInput
          theme={theme}
          size={item.size ? item.size : "100%"}
          paddingRight={item.paddingRight ? item.paddingRight : "0.3rem"}
          paddingLeft={item.paddingLeft ? item.paddingLeft : "0rem"}
        >
          <Input
            theme={theme}
            type={item.type}
            autoComplete="off"
            name={item.placeholder}
            placeholder={item.placeholder}
          />
        </BoxInput>
      </>
    )
  } else {
    return (
      <>
        <p>Bad InputComponent</p>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default InputComponent
