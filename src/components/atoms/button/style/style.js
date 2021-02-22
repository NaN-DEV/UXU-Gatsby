import { Link } from "gatsby"
import styled, { css } from "styled-components"

const buttonStyles = css`
  display: flex;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  align-items: center;
  justify-content: center;
  transform: ${props => props.theme.settings.animation};
  border-radius: ${props => props.theme.settings.borderRadius};
`

const buttonColor = css`
  ${props => {
    switch (props.theme.choice) {
      case "primary":
        return css`
          height: 4.2rem;
          padding: 0 ${props.theme.settings.breakFat};
          border-radius: ${props.theme.settings.borderRadius};
          background-color: ${props.theme.settings.colorTextActive};
          color: ${props.theme.settings.colorMainBackGround} !important;

          &:hover {
            background-color: ${props.theme.settings.colorTextDisactive};
          }
        `
      case "secondary":
        return css`
          height: 4.2rem;
          padding: 0 ${props.theme.settings.breakFat};
          color: ${props.theme.settings.colorTextActive};
          border-radius: ${props.theme.settings.borderRadius};
          background-color: ${props.theme.settings.colorMainBackGround};
        `

      default:
        return css`
          background-color: transparent;
        `
    }
  }}
`

export const LinkOut = styled.a`
  ${buttonColor}
  ${buttonStyles}
`

export const Button = styled.button`
  ${buttonColor}
  ${buttonStyles}
    ${props =>
      props.disabled &&
      css`
        opacity: 0.1 !important;
        cursor: no-drop !important;
      `}
`

export const LinkIn = styled(Link)`
  ${buttonColor}
  ${buttonStyles}
`
