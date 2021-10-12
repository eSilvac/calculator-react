import * as S from './styles';

const CalculatorKeyboardKey = ({ value, label, extended = null, onChange, type }) => {
  return (
    <S.KeyWrapper data-testid='calculator-keyboard-key' extended={extended}>
      <S.KeyLabel type={type} onClick={() => onChange(value)}>
        {label}
      </S.KeyLabel>
    </S.KeyWrapper>
  );
};

export default CalculatorKeyboardKey;
