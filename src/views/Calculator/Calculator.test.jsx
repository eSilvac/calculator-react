import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('renders all sections of the calculator', () => {
  test('renders selector type section', () => {
    render(<Calculator />);

    const selectorTypesSection = screen.getByTestId('calculator-selector-type');
    expect(selectorTypesSection).toBeInTheDocument();
  });

  test('renders values section', () => {
    render(<Calculator />);

    const valuesSection = screen.getByTestId('calculator-values');
    expect(valuesSection).toBeInTheDocument();
  });

  test('renders keyboard section', () => {
    render(<Calculator />);

    const keyboardSection = screen.getByTestId('calculator-keyboard');
    expect(keyboardSection).toBeInTheDocument();
  });
});
