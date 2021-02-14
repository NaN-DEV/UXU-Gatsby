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
  padding: 1.5rem;
  font-size: 1.5rem;
  border-radius: 3px;
  font-weight: bold;
  -webkit-appearance: none;
  font-family: "Montserrat", sans-serif;

  ${props => {
    if (props.errors) {
      return css`
        border: 3px solid ${props => props.theme.settings.danger};
      `
    } else if (props.value && props.value.length > 0) {
      return css`
        border: 3px solid ${props => props.theme.settings.primary};
      `
    } else {
      return css`
        border: 3px solid ${props => props.theme.settings.dark};
      `
    }
  }}

  &::placeholder {
    opacity: 1;
    font-weight: bold;
    color: ${props => props.theme.settings.dark};
  }

  &:focus {
    outline: none;
    border: 3px solid ${props => props.theme.settings.primary};

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
