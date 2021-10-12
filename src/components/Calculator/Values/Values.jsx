import * as S from './styles';

const CalculatorValues = ({ operation, result }) => {
  return (
    <S.ValueWrapper>
      <S.Operation>{operation}</S.Operation>
      <S.Result>{result}</S.Result>
    </S.ValueWrapper>
  );
};

export default CalculatorValues;
