import * as S from './styles';

const options = [
  { value: 'windows', label: 'Windows' },
  { value: 'ios', label: 'iOS' },
  { value: 'android', label: 'Android' },
];

const CalculatorTypeSelector = ({ calculatorType, onChange }) => {
  return (
    <S.TypeSelectorWrapper data-testid='calculator-selector-type'>
      <S.ButtonGroup>
        {options.map(({ value, label }, idx) => (
          <S.Button
            key={idx}
            onClick={() => onChange(value)}
            selected={calculatorType === value}
            data-testid={`calculator-selector-type-${value}`}
          >
            {label}
          </S.Button>
        ))}
      </S.ButtonGroup>
    </S.TypeSelectorWrapper>
  );
};

export default CalculatorTypeSelector;
