import { keyboardOptions, operationLabels } from './helpers';
import * as S from './styles';

const CalculatorKeyboard = ({ type }) => {
  const keyBoardDistribution = keyboardOptions[type];

  return (
    <S.Wrapper>
      {keyBoardDistribution.map(key => {
        const label = typeof key === 'string' ? operationLabels[key] : key;

        return label;
      })}
    </S.Wrapper>
  );
};

export default CalculatorKeyboard;
