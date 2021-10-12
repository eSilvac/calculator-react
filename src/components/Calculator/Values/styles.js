import styled from 'styled-components';

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
`;

export const Operation = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: 500;
  color: ${props => props.theme.operationText};
`;

export const Result = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${props => props.theme.resultText};
`;
