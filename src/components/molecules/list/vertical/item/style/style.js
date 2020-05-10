import styled from "styled-components"

const Li = styled.li`
  flex: 100%;
  width: 100%;
  display: flex;
  margin: 7.5px 0;
  justify-content: left;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: none;
    width: auto;
    margin: 15px 0px;
  }
`

export default Li
