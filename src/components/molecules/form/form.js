// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT COMPONENT START
import Input from "./input/input"

// IMPORT STYLES
import { Form } from "./style/style"

// CREATE NEW COMPONENT

const FormComponent = props => {
  const { items, className } = props
  return (
    <>
      <Form theme={theme} className={className}>
        {items &&
          items.map((item, i) => {
            if (item.input) {
              return <Input key={i} item={item.input} />
            } else if (item.textArea) {
              return <TextArea key={i} item={item} />
            } else if (item.button) {
              return <Button submit key={i} title={item.button.title} />
            }
          })}
      </Form>
    </>
  )
}

// EXPORT NEW COMPONENT
export default FormComponent
