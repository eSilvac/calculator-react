import Key from './Key/Key';
import { keyboardLayoutOptions } from './helpers';

import * as S from './styles';

const CalculatorKeyboard = ({ type, onChange }) => {
  const keyBoardDistribution = keyboardLayoutOptions[type];

  return (
    <S.KeyboardWrapper data-testid='calculator-keyboard'>
      {keyBoardDistribution.map(keyOptions => {
        return <Key key={keyOptions.value} onChange={onChange} {...keyOptions} />;
      })}
    </S.KeyboardWrapper>
  );
};

export default CalculatorKeyboard;
