// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../../layouts/settings"

// IMPORT COMPONENT
import Icon from "../../../../atoms/icon/icon"

// IMPORT STYLES
import { Selection, Input, Label, Strong, Title, Description } from "./style/style"

// CREATE NEW COMPONENT

const RadioRepairComponent = props => {
  const { item, name, click } = props

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
        {item.active ? (
          <>
            <Input
              id={item.id}
              name={name}
              type="radio"
              theme={theme}
              onClick={() => scroll(click)}
            />
            <Label for={item.id} theme={theme} active={item.active}>
              {item.icon === "ask" && <Icon ask className="icon" />}
              {item.icon === "box" && <Icon box className="icon" />}
              {item.icon === "map" && <Icon map className="icon" />}
              {item.icon === "tools" && <Icon tools className="icon" />}
              {item.icon === "protection" && <Icon protection className="icon" />}
              {item.additional && (
                <Strong theme={theme} active={item.active}>
                  {item.additional}
                </Strong>
              )}
              {item.icon === "rocket" && <Icon rocket className="icon" />}
              <Title theme={theme} active={item.active}>
                {item.title}
              </Title>
              <Description theme={theme} active={item.active}>
                {item.description}
              </Description>
            </Label>
          </>
        ) : (
          <>
            <Input id={item.id} name={name} type="radio" theme={theme} disabled />
            <Label for={item.id} theme={theme} active={item.active}>
              {item.icon === "ask" && <Icon ask className="icon" />}
              {item.icon === "box" && <Icon box className="icon" />}
              {item.icon === "map" && <Icon map className="icon" />}
              {item.icon === "tools" && <Icon tools className="icon" />}
              {item.icon === "protection" && <Icon protection className="icon" />}
              {item.additional && (
                <Strong theme={theme} active={item.active}>
                  {item.additional}
                </Strong>
              )}
              {item.icon === "rocket" && <Icon rocket className="icon" />}
              <Title theme={theme} active={item.active}>
                {item.title}
              </Title>
              <Description theme={theme} active={item.active}>
                {item.description}
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
