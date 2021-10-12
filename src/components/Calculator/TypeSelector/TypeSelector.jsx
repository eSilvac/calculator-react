import * as S from './styles';

const options = [
  { value: 'windows', label: 'Windows' },
  { value: 'ios', label: 'iOS' },
  { value: 'android', label: 'Android' },
];

const CalculatorTypeSelector = ({ calculatorType, onChange }) => {
  return (
    <S.TypeSelectorWrapper>
      <S.ButtonGroup>
        {options.map(({ value, label }) => (
          <S.Button onClick={() => onChange(value)} selected={calculatorType === value}>
            {label}
          </S.Button>
        ))}
      </S.ButtonGroup>
    </S.TypeSelectorWrapper>
  );
};

export default CalculatorTypeSelector;
