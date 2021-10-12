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
    keyRadius: '50%',
    numberBg: '#505050',
    numberText: '#fff',
    operationText: '#fff',
    operationBg: '#FF9500',
    solveBg: '#FF9500',
    solveText: '#fff',
    extraOptionBg: '#D4D4D2',
    extraOptionText: '#1C1C1C',
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
        <CalculatorValues />
        <CalculatorKeyboard type={calculatorTypes} />
      </S.Container>
    </ThemeProvider>
  );
};

export default Calculator;
