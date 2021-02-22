import { Field } from "formik"
import styled, { css } from "styled-components"

export const Box = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  padding: ${props => props.theme.settings.break} 0;
`

export const CheckBox = styled(Field)`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  position: relative;
  border-radius: 3px;
  font-weight: normal;
  -webkit-appearance: none;
  padding: ${props => props.theme.settings.break};
  color: ${props => props.theme.settings.colorTextActive};
  border-radius: ${props => props.theme.settings.borderRadius};
  background-color: ${props => props.theme.settings.colorMainBackGround};

  ${props => {
    if (props.errors) {
      return css`
        border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.danger};
      `
    } else {
      return css`
        border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorTextActive};
      `
    }
  }}

  &:focus {
    outline: none;
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
      border-radius: ${props => props.theme.settings.borderRadius};
      background-color: ${props => props.theme.settings.colorTextActive};
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
  -webkit-appearance: none;
  padding: 0 0 0 ${props => props.theme.settings.break};

  ${props => {
    if (props.errors) {
      return css`
        color: ${props => props.theme.settings.danger};
      `
    } else {
      return css`
        color: ${props => props.theme.settings.colorTextActive};
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
  color: ${props => props.theme.settings.danger};
  padding-top: ${props => props.theme.settings.breakLight};
`
