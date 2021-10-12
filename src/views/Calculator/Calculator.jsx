import { useState } from 'react';
import { css, ThemeProvider } from 'styled-components';

import CalculatorKeyboard from '../../components/Calculator/Keyboard/Keyboard';
import CalculatorTypeSelector from '../../components/Calculator/TypeSelector/TypeSelector';
import CalculatorValues from '../../components/Calculator/Values/Values';

import useCalculator from '../../utils/hooks/useCalculator';

import * as S from './styles';

const calculatorTypesThemes = {
  iphone: {
    //Keyboard Configuration
    bg: '#1C1C1C',
    operationText: '#dedede',
    resultText: '#676767',

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
};

const Calculator = () => {
  const [calculatorTypes, setCalculatorType] = useState('iphone');
  const { operation, solution, handleChange } = useCalculator();

  const theme = calculatorTypesThemes[calculatorTypes];

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <CalculatorTypeSelector />
        <CalculatorValues operation={operation} solution={solution} />
        <CalculatorKeyboard type={calculatorTypes} />
      </S.Container>
    </ThemeProvider>
  );
};

export default Calculator;
