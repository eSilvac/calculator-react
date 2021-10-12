import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import CalculatorKeyboard from '../../components/Calculator/Keyboard/Keyboard';
import CalculatorTypeSelector from '../../components/Calculator/TypeSelector/TypeSelector';
import CalculatorValues from '../../components/Calculator/Values/Values';

import useCalculator from '../../utils/hooks/useCalculator';

import * as S from './styles';
import { calculatorTypesThemes } from './styles';

const Calculator = () => {
  const [calculatorType, setCalculatorType] = useState('ios');
  const { operation, result, handleChange, handleBackToHistory } = useCalculator();

  const theme = calculatorTypesThemes[calculatorType];

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <CalculatorTypeSelector calculatorType={calculatorType} onChange={setCalculatorType} />
        <CalculatorValues operation={operation} result={result} handleBackToHistory={handleBackToHistory} />
        <CalculatorKeyboard type={calculatorType} onChange={handleChange} />
      </S.Container>
    </ThemeProvider>
  );
};

export default Calculator;
