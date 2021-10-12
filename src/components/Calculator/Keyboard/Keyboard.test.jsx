import { render, screen } from '@testing-library/react';
import CalculatorKeyboard from './Keyboard';
import { keyboardLayoutOptions } from './helpers';

test('calculator renders all keys', () => {
  render(<CalculatorKeyboard type={'ios'} onChange={jest.fn()} />);

  const keyBoardDistribution = keyboardLayoutOptions['ios'];

  const keyboardKeys = screen.getAllByTestId('calculator-keyboard-key');
  expect(keyboardKeys).toHaveLength(keyBoardDistribution.length);
});
