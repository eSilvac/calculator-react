import styled from 'styled-components';

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  padding-top: 0;
`;

export const IconWrapper = styled.div`
  color: ${props => props.theme.operationText};
  margin-bottom: 17px;
  cursor: pointer;
`;

export const Operation = styled.p`
  margin: 0;
  font-size: 40px;
  font-weight: 500;
  height: 47.27px;
  color: ${props => props.theme.operationText};
`;

export const Result = styled.p`
  margin: 0;
  font-size: 25px;
  height: 35px;
  color: ${props => props.theme.resultText};
`;

export const MenuItemOperation = styled.span`
  color: gray;
  font-size: 14px;
`;

export const MenuItemResult = styled.span`
  display: block;
  color: #000;
  font-size: 16px;
`;
