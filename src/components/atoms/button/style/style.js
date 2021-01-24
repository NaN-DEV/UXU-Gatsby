import { Link } from "gatsby"
import styled, { css } from "styled-components"

const buttonStyles = css`
  opacity: 1;
  display: flex;
  outline: none;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  align-items: center;
  justify-content: center;
  transform: ${props => props.theme.settings.animation};
  border-radius: ${props => props.theme.settings.border};
`

const buttonColor = css`
  &:hover {
    opacity: 0.6;
  }

  ${props => {
    switch (props.theme.choice) {
      case "primary":
        return css`
          height: 4.2rem;
          padding: 0 3rem;
          border-radius: ${props.theme.settings.border};
          color: ${props.theme.settings.secondary} !important;
          background-color: ${props.theme.settings.primary} !important;
          box-shadow: ${props.theme.settings.tertiary_5} ${props.theme.settings.border}
            ${props.theme.settings.border} 0 !important;
        `
      case "secondary":
        return css`
          height: 4.2rem;
          padding: 0 3rem;
          border-radius: ${props.theme.settings.border};
          color: ${props.theme.settings.primary} !important;
          background-color: ${props.theme.settings.secondary} !important;
          box-shadow: ${props.theme.settings.tertiary_5} ${props.theme.settings.border}
            ${props.theme.settings.border} 0 !important;
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
