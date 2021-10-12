import { render, screen } from '@testing-library/react';
import CalculatorValues from './Values';

test('calculator values renders correctly', () => {
  const operation = ['1', '+', '1'];
  const result = '1';
  render(<CalculatorValues operation={operation} result={result} handleBackToHistory={jest.fn()} />);

  const operatorSection = screen.getByTestId('calculator-values-operator');
  const resultSection = screen.getByTestId('calculator-values-result');

  expect(operatorSection).toBeInTheDocument(operation.join(' '));
  expect(resultSection).toBeInTheDocument(result);
});
