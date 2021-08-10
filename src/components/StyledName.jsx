import styled from 'styled-components/macro'


export const StyledName = styled.div`
  display: inline-flex;
  font-weight: ${({title}) => !title.includes('.') && 'bold'};

  .title {
    padding-left: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s;
    align-content: center;
  }
`