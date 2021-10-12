import Routes from './Routes';

import * as S from './styles';

const App = () => {
  return (
    <S.App data-testid='calculator-app'>
      <Routes />
    </S.App>
  );
};

export default App;
