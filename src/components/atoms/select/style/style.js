import styled, { css } from "styled-components"

export const BoxSelect = styled.div`
  width: 100%;
  height: 6rem;
  font-size: 1.5rem;
  border-radius: 3px;
  position: relative;
  font-weight: normal;

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

  &:after {
    content: "";
    width: 0;
    height: 0;
    top: 2.2rem;
    right: 1rem;
    position: absolute;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 12px solid ${props => props.theme.primary};
  }
`

export const Select = styled.select`
  border: 0;
  color: #000;
  width: 100%;
  height: 100%;
  border-radius: 0;
  padding: 0 1.5rem;
  font-weight: normal;
  -webkit-appearance: none;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.muted};
  font-family: ${props => props.theme.font_secondary};
  &::placeholder {
    opacity: 1;
    color: ${props => props.theme.primary};
    transition: ${props => props.theme.animation};
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::-ms-expand {
    display: none;
  }
`
export const Option = styled.option``
