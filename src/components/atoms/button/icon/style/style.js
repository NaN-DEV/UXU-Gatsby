import { Link } from "gatsby"
import styled, { css } from "styled-components"

const button = css`
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${props => props.theme.light};
    .box {
      display: block;
    }
  }
`

export const BoxButton = styled.div`
  top: 30px;
  right: 0px;
  display: none;
  padding-top: 20px;
  position: absolute;
`

export const ButtonClassic = styled.button`
  ${button}
`

export const ButtonClassicLink = styled.a`
  ${button}
`

export const ButtonClassicSlug = styled(Link)`
  ${button}
`
