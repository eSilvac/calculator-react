import { useState } from 'react';
import { css, ThemeProvider } from 'styled-components';

import CalculatorKeyboard from '../../components/Calculator/Keyboard/Keyboard';
import CalculatorTypeSelector from '../../components/Calculator/TypeSelector/TypeSelector';
import CalculatorValues from '../../components/Calculator/Values/Values';

import useCalculator from '../../utils/hooks/useCalculator';

import * as S from './styles';

const calculatorTypesThemes = {
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
      align-items: center;

      & > svg {
        margin: 0 !important;
      }
    `,
  },
};

const Calculator = () => {
  const [calculatorType, setCalculatorType] = useState('ios');
  const { operation, solution, handleChange } = useCalculator();

  const theme = calculatorTypesThemes[calculatorType];

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <CalculatorTypeSelector calculatorType={calculatorType} onChange={setCalculatorType} />
        <CalculatorValues operation={operation} solution={solution} />
        <CalculatorKeyboard type={calculatorType} />
      </S.Container>
    </ThemeProvider>
  );
};

export default Calculator;
