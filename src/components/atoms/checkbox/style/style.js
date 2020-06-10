import styled, { css } from "styled-components"

export const Box = styled.div`
  flex: 100%;
  width: 100%;
  height: auto;
  display: flex;
`

export const CheckBox = styled.input`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  position: relative;
  border-radius: 3px;
  font-weight: normal;
  -webkit-appearance: none;
  color: ${props => props.theme.primary};
  padding: ${props => props.theme.break};
  background-color: ${props => props.theme.muted};
  font-family: ${props => props.theme.font_secondary};
  ${props =>
    props.className === "error"
      ? css`
          box-shadow: 3px 3px 0px ${props => props.theme.danger};
          border: ${props => props.theme.border} solid red;
        `
      : css`
          box-shadow: 3px 3px 0px ${props => props.theme.dark};
          border: ${props => props.theme.border} solid ${props => props.theme.primary};
        `}
  &::placeholder {
    opacity: 1;
    font-weight: normal;
    color: ${props => props.theme.primary};
    transition: ${props => props.theme.animation};
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
      background-color: ${props => props.theme.primary};
    }
  }
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 3px;
  align-items: center;
  padding: 0 0 0 1.5rem;
  -webkit-appearance: none;
  color: ${props => props.theme.primary};

  &:focus {
    outline: none;
  }
`
