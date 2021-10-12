import { fireEvent, render, screen } from '@testing-library/react';
import CalculatorTypeSelector from './TypeSelector';

test('calculator values renders correctly', () => {
  const changeTypeFn = jest.fn();
  render(<CalculatorTypeSelector calculatorType='ios' onChange={changeTypeFn} />);

  const androidSectionItem = screen.getByTestId('calculator-selector-type-android');
  fireEvent.click(androidSectionItem);
  expect(changeTypeFn).toHaveBeenCalledWith('android');

  const iosSectionItem = screen.getByTestId('calculator-selector-type-ios');
  fireEvent.click(iosSectionItem);
  expect(changeTypeFn).toHaveBeenCalledWith('ios');

  const windowSectionItem = screen.getByTestId('calculator-selector-type-windows');
  fireEvent.click(windowSectionItem);
  expect(changeTypeFn).toHaveBeenCalledWith('windows');
});
