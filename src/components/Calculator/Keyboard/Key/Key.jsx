import * as S from './styles';

const CalculatorKeyboardKey = ({ value, label, extended = null, onChange, type }) => {
  return (
    <S.KeyWrapper extended={extended}>
      <S.KeyLabel type={type} onClick={e => onChange(value)}>
        {label}
      </S.KeyLabel>
    </S.KeyWrapper>
  );
};

export default CalculatorKeyboardKey;
