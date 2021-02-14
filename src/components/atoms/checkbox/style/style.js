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

export const CheckBox = styled(Field)`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  position: relative;
  border-radius: 3px;
  font-weight: normal;
  background-color: white;
  -webkit-appearance: none;
  color: ${props => props.theme.settings.primary};
  padding: ${props => props.theme.settings.break};

  ${props => {
    if (props.errors) {
      return css`
        border: 3px solid ${props => props.theme.settings.danger};
      `
    } else if (props.checked) {
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
    font-weight: normal;
    color: ${props => props.theme.settings.primary};
    transition: ${props => props.theme.settings.animation};
  }
  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }
  &:checked {
    &:after {
      content: "";
      top: 0.75rem;
      left: 0.75rem;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      position: absolute;
      border-radius: 3px;
      background-color: ${props => props.theme.settings.primary};
    }
  }
`

export const Label = styled.label`
  width: calc(100% - 4.3rem);
  display: flex;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 3px;
  align-items: center;
  padding: 0 0 0 1.5rem;
  -webkit-appearance: none;

  ${props => {
    if (props.errors) {
      return css`
        color: ${props => props.theme.settings.danger};
      `
    } else if (!props.checked) {
      return css`
        color: ${props => props.theme.settings.primary};
      `
    } else {
      return css`
        color: ${props => props.theme.settings.dark};
      `
    }
  }}

  &:focus {
    outline: none;
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
