import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 280px;
  background-color: ${props => props.theme.bg};
  border-radius: 7px;
`;

export const calculatorTypesThemes = {
  ios: {
    //Keyboard Configuration
    bg: '#1C1C1C',
    operationText: '#dedede',
    resultText: '#676767',
    gap: '10px',

    // Keys Configuration
    keyCommons: css`
      border-radius: 50%;
      width: 53px;
      height: 53px;
    `,

    numberKey: css`
      background-color: #505050;
      color: #fff;
      font-size: 35px;
      font-weight: 500;
    `,
    operatorKey: css`
      background-color: #ff9500;
      color: #fff;
      font-size: 22px;
      font-weight: 500;
    `,
    extrasKey: css`
      background-color: #d4d4d2;
      color: #1c1c1c;
      font-size: 25px;
      font-weight: 500;

      & svg {
        margin-top: 14.5px;
      }
    `,
    solveKey: css`
      font-size: 22px;
      font-weight: bold;
      background-color: #ff9500;
      color: #fff;
    `,

    extendedKey: css`
      width: 100%;
      border-radius: 30px;
      text-align: left;
      padding-left: 19px;
    `,
  },
  android: {
    //Keyboard Configuration
    bg: '#1C1C1C',
    operationText: '#dedede',
    resultText: '#676767',
    gap: '8px',

    // Keys Configuration
    keyCommons: css`
      border-radius: 4px;
      width: 53px;
      height: 53px;
    `,

    numberKey: css`
      background-color: #292929;
      color: #e5e5e5;
      font-size: 35px;
      font-weight: 500;

      & > svg {
        font-size: 25px;
        margin: 0 !important;
      }
    `,

    operatorKey: css`
      background-color: #142e47;
      color: #329af8;
      font-size: 22px;
      font-weight: 500;
    `,

    solveKey: css`
      font-size: 22px;
      font-weight: bold;
      background-color: #016cde;
      color: #fff;
    `,

    extendedKey: css`
      height: 100%;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      & > svg {
        margin: 0 !important;
      }
    `,
  },

  windows: {
    //Keyboard Configuration
    bg: '#e6e6e6',
    operationText: '#000',
    resultText: '#676767',
    gap: '2px',

    // Keys Configuration
    keyCommons: css`
      width: 100% !important;
      border-radius: 4px;
      width: 53px;
      height: 53px;

      &:hover {
        opacity: 0.7;
      }
    `,

    numberKey: css`
      background-color: #fafafa;
      color: #000;
      font-size: 20px;
      font-weight: 500;

      & > svg {
        font-size: 18px;
        margin: 0 !important;
      }
    `,

    operatorKey: css`
      background-color: #f0f0f0;
      color: #9d9d9d;
      font-size: 15px;
      font-weight: 500;
    `,

    solveKey: css`
      font-size: 18px;
      font-weight: bold;
      background-color: #8abae0;
      color: #101010;
    `,

    extendedKey: css`
      height: 100%;
      border-radius: 4px;
      align-items: center;

      & > svg {
        margin: 0 !important;
      }
    `,
  },
};
