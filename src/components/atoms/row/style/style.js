import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: ${props => props.theme.max_width};
  padding: ${props => props.theme.break_mobile};

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: ${props => props.theme.break_desctop};
  }
`;

export default Row;
