// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT STYLES
import { BoxSelect, Select, Option } from "./style/style"

// CREATE NEW COMPONENT

const SelectComponent = props => {
  const { option, type, selected, id, name, className, onChange, onBlur, value } = props
  return (
    <>
      <BoxSelect theme={theme} className={className}>
        <Select
          id={id}
          name={name}
          theme={theme}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={className}
        >
          {selected && (
            <Option selected disabled value="">
              {selected}
            </Option>
          )}
          {option.map((item, index) => {
            return (
              <Option key={index} value={item}>
                {item}
              </Option>
            )
          })}
        </Select>
      </BoxSelect>
    </>
  )
}

// EXPORT NEW COMPONENT
export default SelectComponent
