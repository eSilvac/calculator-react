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

export const Operation = styled.input`
  width: 100%;
  margin: 0;
  font-size: 40px;
  font-weight: 500;
  height: 47.27px;
  outline-width: 0 !important;
  border: 0;
  background-color: ${props => props.theme.bg};
  text-align: right;
  color: ${props => props.theme.operationText};

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Result = styled.p`
  width: 100%;
  margin: 0;
  font-size: 25px;
  height: 35px;
  padding-right: 5px;
  overflow-y: hidden;
  overflow-x: scroll;
  color: ${props => props.theme.resultText};

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 2px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    margin: 5px;
    padding: 5px;
    background-color: ${props => props.theme.bg};
    border-radius: 2px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    border-radius: 2px;
    background-color: gray;
  }
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
