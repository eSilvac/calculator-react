import styled from 'styled-components';

export const KeyboardWrapper = styled.div`
  display: grid;
  padding: 20px;
  padding-top: 0;
  grid-gap: ${props => props.theme.gap};
  grid-template-columns: repeat(4, 1fr);
`;
