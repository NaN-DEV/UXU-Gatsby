// IMPORT PLUGIN
import React from "react"
import { useFormik } from "formik"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT COMPONENT START
import Radio from "./radio/radio"
import Input from "./input/input"
import Select from "../form/select/select"
import TextArea from "./textarea/textarea"
import Button from "../../atoms/button/button"

// IMPORT STYLES
import {
  Form,
  Title,
  InfoTxt,
  Box,
  BoxElement,
  BoxTag,
  Tag,
  BoxElementTitle,
  Step,
} from "./style/style"

// CREATE NEW COMPONENT

const FormComponent = props => {
  const { items, className, title } = props

  return (
    <>
      <Form theme={theme} className={className}>
        {title && <Title theme={theme}>{title}</Title>}
        {items &&
          items.map((item, i) => {
            if (item.input) {
              return <Input key={i} item={item.input} />
            } else if (item.textarea) {
              return <TextArea key={i} item={item.textarea} />
            } else if (item.select) {
              return <Select key={i} item={item.select} />
            } else if (item.info) {
              return <InfoTxt theme={theme}>{item.info}</InfoTxt>
            } else if (item.button) {
              return <Button submit key={i} title={item.button.title} />
            } else if (item.box) {
              return (
                <>
                  <Box height={item.height} theme={theme} id={item.id}>
                    {item.header && (
                      <>
                        <Step theme={theme} number={item.header.number}>
                          {item.header.title}
                        </Step>
                      </>
                    )}
                    {item.tag ? (
                      <>
                        <BoxElement theme={theme}>
                          <>
                            {item.box.map(element => {
                              if (element.radio) {
                                return (
                                  <>
                                    {element.radio.option.map((radio, i) => {
                                      return (
                                        <>
                                          <Radio key={i} item={radio} name={element.radio.name} />
                                        </>
                                      )
                                    })}
                                  </>
                                )
                              } else if (element.input) {
                                return <Input key={i} item={element.input} />
                              } else if (element.textarea) {
                                return <TextArea key={i} item={element.textarea} />
                              } else if (element.select) {
                                return <Select key={i} item={element.select} />
                              } else if (element.info) {
                                return <InfoTxt theme={theme}>{element.info}</InfoTxt>
                              } else if (element.button) {
                                return <Button submit key={i} title={element.button.title} />
                              } else if (element.title) {
                                return (
                                  <BoxElementTitle theme={theme}>{element.title}</BoxElementTitle>
                                )
                              } else {
                                return null
                              }
                            })}
                          </>
                        </BoxElement>
                        <BoxTag theme={theme}>
                          {item.tag.map((tag, i) => {
                            return <Tag>{tag}</Tag>
                          })}
                        </BoxTag>
                      </>
                    ) : (
                      <>
                        {item.box.map(element => {
                          if (element.radio) {
                            return (
                              <>
                                {element.radio.option.map((radio, i) => {
                                  return (
                                    <>
                                      <Radio
                                        key={i}
                                        item={radio}
                                        name={element.radio.name}
                                        click={element.radio.click ? element.radio.click : false}
                                      />
                                    </>
                                  )
                                })}
                              </>
                            )
                          } else if (element.input) {
                            return <Input key={i} item={element.input} />
                          } else if (element.textarea) {
                            return <TextArea key={i} item={element.textarea} />
                          } else if (element.select) {
                            return <Select key={i} item={element.select} />
                          } else if (element.info) {
                            return <InfoTxt theme={theme}>{element.info}</InfoTxt>
                          } else if (element.button) {
                            return <Button submit key={i} title={element.button.title} />
                          } else {
                            return null
                          }
                        })}
                      </>
                    )}
                  </Box>
                </>
              )
            } else {
              return null
            }
          })}
      </Form>
    </>
  )
}

// EXPORT NEW COMPONENT
export default FormComponent
