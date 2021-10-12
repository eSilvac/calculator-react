import Key from './Key/Key';
import { keyboardLayoutOptions } from './helpers';

import * as S from './styles';

const CalculatorKeyboard = ({ type }) => {
  const keyBoardDistribution = keyboardLayoutOptions[type];

  return (
    <S.KeyboardWrapper>
      {keyBoardDistribution.map(keyOptions => {
        return <Key key={keyOptions.value} {...keyOptions} />;
      })}
    </S.KeyboardWrapper>
  );
};

export default CalculatorKeyboard;
