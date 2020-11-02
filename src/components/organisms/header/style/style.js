import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: flex-end;
  background-color: ${props => props.theme.secondary};

  .row {
    height: 40px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .search {
    flex: 11.5rem;
    max-width: 11.5rem;
    margin-right: auto;
    margin-left: ${props => props.theme.break};
  }

  .button {
    margin-left: auto;
  }

  .none {
    display: none;
  }

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    .search {
      flex: 25rem;
      max-width: 25rem;
    }
  }
`

export const BoxHeader = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: block;
`
