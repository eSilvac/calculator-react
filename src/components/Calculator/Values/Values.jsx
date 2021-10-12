import * as S from './styles';

const CalculatorValues = ({ operation, result }) => {
  return (
    <S.ValueWrapper>
      <S.Operation>{operation}123</S.Operation>
      <S.Result>{result}123123</S.Result>
    </S.ValueWrapper>
  );
};

export default CalculatorValues;
