import styled, { css } from 'styled-components';

export const KeyWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ extended, theme }) => {
    if (extended === 'right') {
      return css`
        grid-column: span 2;
        & > div {
          ${theme.extendedKey}
        }
      `;
    }

    if (extended === 'bottom') {
      return css``;
    }
  }}
`;

export const KeyLabel = styled.div`
  cursor: pointer;
  line-height: 54px;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }

  & svg {
    margin-top: 16px;
  }

  ${({ theme, type }) => {
    if (type === 'solve') return theme.solveKey;
    else if (type === 'operator') return theme.operatorKey;
    else if (type === 'extraOption') return theme.extrasKey;
    else return theme.numberKey;
  }}

  ${({ theme }) => theme.keyCommons}
`;
