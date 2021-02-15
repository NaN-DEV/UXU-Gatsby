// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT COMPONENT
import Icon from "../../../atoms/icon/icon"

// IMPORT STYLES
import { Selection, Input, Label, Strong, Title, Description, defaultValue } from "./style/style"

// CREATE NEW COMPONENT

const RadioRepairComponent = props => {
  const {
    name,
    click,
    id,
    active,
    icon,
    additional,
    title,
    description,
    defaultValue,
    onBlur,
    onChange,
    value,
    checked,
  } = props

  const scroll = e => {
    const yOffset = -35
    const element = document.getElementById(e)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    if (element) {
      setTimeout(function () {
        window.scrollTo({ top: y, behavior: "smooth" })
      }, 200)
    }
  }

  return (
    <>
      <Selection theme={theme}>
        {active ? (
          <>
            <Input
              id={id}
              name={name}
              type="radio"
              theme={theme}
              onClick={() => scroll(click)}
              defaultValue={defaultValue}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              checked={checked}
            />
            <Label
              htmlFor={id}
              theme={theme}
              active={active ? true : false}
              onClick={() => scroll(click)}
              defaultValue={defaultValue}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              checked={checked}
            >
              {icon === "ask" && <Icon ask className="icon" />}
              {icon === "box" && <Icon box className="icon" />}
              {icon === "map" && <Icon map className="icon" />}
              {icon === "tools" && <Icon tools className="icon" />}
              {icon === "protection" && <Icon protection className="icon" />}
              {additional && (
                <Strong theme={theme} active={active ? true : false}>
                  {additional}
                </Strong>
              )}
              {icon === "rocket" && <Icon rocket className="icon" />}
              <Title theme={theme} active={active}>
                {title}
              </Title>
              <Description theme={theme} active={active}>
                {description}
              </Description>
            </Label>
          </>
        ) : (
          <>
            <Input id={id} name={name} type="radio" theme={theme} disabled />
            <Label htmlFor={id} theme={theme} active={active}>
              {icon === "ask" && <Icon ask className="icon" />}
              {icon === "box" && <Icon box className="icon" />}
              {icon === "map" && <Icon map className="icon" />}
              {icon === "tools" && <Icon tools className="icon" />}
              {icon === "protection" && <Icon protection className="icon" />}
              {additional && (
                <Strong theme={theme} active={active}>
                  {additional}
                </Strong>
              )}
              {icon === "rocket" && <Icon rocket className="icon" />}
              <Title theme={theme} active={active}>
                {title}
              </Title>
              <Description theme={theme} active={active}>
                {description}
              </Description>
            </Label>
          </>
        )}
      </Selection>
    </>
  )
}

// EXPORT NEW COMPONENT
export default RadioRepairComponent
