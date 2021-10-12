import * as S from './styles';

const CalculatorKeyboardKey = ({ label, extended = null, onClick, type }) => {
  return (
    <S.KeyWrapper extended={extended}>
      <S.KeyLabel type={type} onClick={onClick}>
        {label}
      </S.KeyLabel>
    </S.KeyWrapper>
  );
};

export default CalculatorKeyboardKey;
