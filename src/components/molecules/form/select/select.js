// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT STYLES
import { BoxSelect, Select, Option } from "./style/style"

// CREATE NEW COMPONENT

const SelectComponent = props => {
  const { item } = props
  if (item.type === "category") {
    return (
      <>
        <BoxSelect theme={theme}>
          <Select theme={theme}>
            {item.selected && (
              <Option selected disabled>
                {item.selected}
              </Option>
            )}
            {item.option.map((item, index) => {
              return <Option key={index}>{item}</Option>
            })}
          </Select>
        </BoxSelect>
      </>
    )
  } else {
    return (
      <>
        <BoxSelect theme={theme}>
          <Select theme={theme}>
            {item.selected && (
              <Option selected disabled>
                {item.selected}
              </Option>
            )}
            {item.option.map((item, index) => {
              return <Option key={index}>{item}</Option>
            })}
          </Select>
        </BoxSelect>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default SelectComponent
