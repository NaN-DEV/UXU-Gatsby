import styled, { css } from "styled-components"
import { Link } from "gatsby"

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
  border-radius: ${props => props.theme.settings.borderRadius};
`

const buttonColor = css`
  color: ${props => props.theme.settings.colorTextActive};

  svg {
    fill: ${props => props.theme.settings.colorTextActive};
  }

  &:hover {
    color: ${props => props.theme.settings.colorText};

    svg {
      fill: ${props => props.theme.settings.colorText};
    }
  }

  ${props =>
    props.theme.button === true &&
    css`
      height: 4.2rem;
      padding: 1.5rem 3rem;
      color: ${props.theme.settings.colorTextActive};
      background-color: ${props.theme.settings.colorBackgroundDisactive};

      &:hover {
        color: ${props.theme.settings.colorBackgroundDisactive};
        background-color: ${props.theme.settings.colorTextActive};
      }
    `}
`

export const LinkOut = styled.a`
  ${buttonColor}
  ${buttonStyles}
  cursor: pointer;
`

export const Button = styled.button`
  ${buttonColor}
  ${buttonStyles}
    ${props =>
      props.disabled &&
      css`
        opacity: 0.2;
        cursor: no-drop !important;
        color: ${props.theme.settings.colorText};
        background-color: ${props.theme.settings.colorBackgroundDisactive};

        &:hover {
          color: ${props.theme.settings.colorText};
          background-color: ${props.theme.settings.colorBackgroundDisactive};
        }
      `}
`

export const LinkIn = styled(Link)`
  ${buttonColor}
  ${buttonStyles}
  cursor: pointer;
`
