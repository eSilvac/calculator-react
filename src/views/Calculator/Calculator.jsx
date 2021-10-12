import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import CalculatorKeyboard from '../../components/Calculator/Keyboard/Keyboard';
import CalculatorTypeSelector from '../../components/Calculator/TypeSelector/TypeSelector';
import CalculatorValues from '../../components/Calculator/Values/Values';

import useCalculator from '../../utils/hooks/useCalculator';

import * as S from './styles';

const calculatorTypesThemes = {
  iphone: {
    bg: '#1C1C1C',
    numberBg: '#FF9500',
    numberText: '#fff',
    operationBg: '#505050',
    operationText: '#fff',
    resultBg: '#FF9500',
    resultText: '#fff',
    extraOptionBg: '#D4D4D2',
    extraOptionText: '#1C1C1C',
  },
};

const Calculator = () => {
  const [calculatorTypes, setCalculatorType] = useState('iphone');
  const { operation, solution, handleChange } = useCalculator();

  const theme = calculatorTypesThemes[calculatorTypes];
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <CalculatorTypeSelector />
        <CalculatorValues />
        <CalculatorKeyboard />
      </S.Container>
    </ThemeProvider>
  );
};

export default Calculator;
