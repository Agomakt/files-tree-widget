import styled from 'styled-components/macro'

export const Collapse = styled.div`
  height: max-content;
  max-height: ${({isOpen}) => (isOpen ? "50vh" : "0px")};
  overflow: hidden;
  transition: 0.3s ease-in-out;
`;