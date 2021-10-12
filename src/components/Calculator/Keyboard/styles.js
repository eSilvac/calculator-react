import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  padding: 20px;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;

const keyCommonStyles = css`
  width: 54px;
  height: 54px;
  border-radius: ${props => props.theme.keyRadius};
  cursor: pointer;
  line-height: 54px;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`;

export const SolveKey = styled.div`
  font-size: 40px;
  font-weight: bold;
  ${keyCommonStyles}
  ${({ theme }) => {
    return css`
      color: ${theme.solveText};
      background-color: ${theme.solveBg};
    `;
  }}
`;

export const NumberKey = styled.div`
  font-size: 35px;
  font-weight: semi-bold;
  ${keyCommonStyles}
  ${({ theme }) => {
    return css`
      color: ${theme.numberText};
      background-color: ${theme.numberBg};
    `;
  }}
`;

export const OperationKey = styled.div`
  font-size: 40px;
  font-weight: bold;
  ${keyCommonStyles}
  ${({ theme }) => {
    return css`
      color: ${theme.operationText};
      background-color: ${theme.operationBg};
    `;
  }}
`;

export const ExtraOptionsKey = styled.div`
  ${({ theme }) => {
    return css`
      color: ${theme.solveText};
      background-color: ${theme.solveBg};
    `;
  }}
`;
