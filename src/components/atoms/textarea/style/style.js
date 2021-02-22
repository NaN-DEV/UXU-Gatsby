import { Field } from "formik"
import styled, { css } from "styled-components"

export const Box = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  padding: 1.5rem 0;
`
export const Textarea = styled(Field)`
  width: 100%;
  height: 15rem;
  font-size: 1.5rem;
  font-weight: bold;
  -webkit-appearance: none;
  font-family: "Montserrat", sans-serif;
  padding: ${props => props.theme.settings.break};
  border-radius: ${props => props.theme.settings.borderRadius};

  &::placeholder {
    opacity: 1;
    font-weight: bold;
    color: ${props => props.theme.settings.colorTextDisactive};
  }

  ${props => {
    if (props.theme.errors) {
      return css`
        border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.danger};

        &::placeholder {
          color: ${props => props.theme.settings.danger};
        }
      `
    } else {
      return css`
        border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorTextActive};

        &::placeholder {
          color: ${props => props.theme.settings.colorTextDisactive};
        }
      `
    }
  }}

  &:focus {
    outline: none;
    border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorBorder};

    &::placeholder {
      opacity: 0;
    }
  }
`

export const Error = styled.p`
  flex: 100%;
  display: block;
  max-width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 0.6rem;
  color: ${props => props.theme.settings.danger};
`
