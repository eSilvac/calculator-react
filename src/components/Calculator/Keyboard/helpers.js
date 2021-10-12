import * as S from './styles';

export const keyboardOptions = {
  iphone: [
    'clear',
    'opposite',
    'percentage',
    'divide',
    7,
    8,
    9,
    'times',
    4,
    5,
    6,
    'minus',
    1,
    2,
    3,
    'plus',
    0,
    'decimal',
    'solve',
  ],
};

export const operationLabels = {
  solve: <S.SolveKey>=</S.SolveKey>,
  plus: <S.OperationKey>+</S.OperationKey>,
  minus: <S.OperationKey>-</S.OperationKey>,
  times: <S.OperationKey>x</S.OperationKey>,
  divide: <S.OperationKey>/</S.OperationKey>,
  clear: <S.ExtraOptionsKey>AC</S.ExtraOptionsKey>,
  opposite: <S.ExtraOptionsKey>AC</S.ExtraOptionsKey>,
  percentage: <S.ExtraOptionsKey>AC</S.ExtraOptionsKey>,
  decimal: <S.NumberKey>.</S.NumberKey>,
};
