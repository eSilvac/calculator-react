import styled, { css } from 'styled-components';

export const TypeSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  border-radius: 5px;
  padding: 2px;

  ${({ type }) => {
    if (type === 'windows') {
      return css``;
    } else {
      return css`
        background-color: #606262;
      `;
    }
  }}
`;

export const Button = styled.div`
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  ${({ selected }) => {
    if (selected) {
      return css`
        background-color: #2c2d2d;
      `;
    }
  }}
`;
