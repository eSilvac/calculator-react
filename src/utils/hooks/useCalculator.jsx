import { useState } from 'react';

const listOfOperators = ['+', '-', '*', '/'];

const useCalculator = () => {
  const [operation, setOperation] = useState([]);
  const [result, setResult] = useState('');

  const lastAddedItem = operation[operation.length - 1];
  const lastAddedItemType =
    operation.length === 0 || listOfOperators.includes(lastAddedItem)
      ? 'operator'
      : lastAddedItem === '%'
      ? 'extraOption'
      : 'number';

  const handleChange = newValue => {
    const newValueItem = listOfOperators.includes(newValue) ? 'operator' : 'number';

    if (newValue === 'backspace') {
      handleBackspace();
      return;
    }

    if (newValue === 'clear') {
      handleClear();
      return;
    }

    // Verify if the user tries to add multiple operators
    if (lastAddedItemType === 'operator' && newValueItem === lastAddedItemType) return;

    // Verify if the number has already a decimal
    if (lastAddedItemType === 'number' && operation.length > 0 && lastAddedItem?.includes('.') && newValue === '.')
      return;

    if (newValue === 'solve') {
      handleSolve();
      return;
    }

    if (newValueItem === 'operator') {
      setOperation(prev => [...prev, newValue]);
      return;
    }

    if (newValueItem === 'number') {
      if (newValue === '%') {
        handlePercentage();
        return;
      }

      let newNumber = lastAddedItemType === 'number' ? lastAddedItem + newValue : newValue;
      let newOperation = lastAddedItemType === 'number' ? operation.slice(0, -1) : operation;
      let newResult = result;

      if (newValue !== '.') {
        newResult = calculate([...newOperation, newNumber]);
      }

      setResult(newResult);
      setOperation([...newOperation, newNumber]);
    }
  };

  const handleSolve = () => {
    setOperation([result]);
    setResult('');
  };

  const handleClear = () => {
    setOperation([]);
    setResult('');
  };

  const handleBackspace = () => {
    if (operation.length === 0) return;

    if (lastAddedItem === 'operator') {
      setOperation([...operation.slice(0, -1)]);
      setResult(calculate([...operation.slice(0, -1)]));
    } else {
      if (operation[operation.length - 1].length === 1) {
        setOperation([]);
        setResult('');
      } else {
        const newOperation = [...operation.slice(0, -1), lastAddedItem.slice(0, -1)];

        setResult(calculate(newOperation));
        setOperation(newOperation);
      }
    }
  };

  const handlePercentage = () => {
    if (lastAddedItem.length === 0 && lastAddedItem[lastAddedItem.length - 1] !== '%') return;

    setResult(calculate([...operation, '%']));
    setOperation(prev => [...prev, '%']);
  };

  const calculate = arr => {
    if (arr.length === 0) return '0';
    if (arr.length === 1) return arr;

    if (arr.includes('%')) {
      const position = arr.findIndex(ele => ele === '%');
      const solution = parseFloat(arr[position - 1]) / 100;
      const initial = arr.slice(0, position - 1);
      let rest = arr.slice(position + 1);

      if (rest.length > 0) rest = ['*', ...rest];

      return calculate([...initial, formatNumber(solution), ...rest]);
    }

    if (arr.includes('*')) {
      const position = arr.findIndex(ele => ele === '*');
      const solution = parseFloat(arr[position - 1]) * parseFloat(arr[position + 1]);
      const initial = arr.slice(0, position - 1);
      const rest = arr.slice(position + 2);

      return calculate([...initial, formatNumber(solution), ...rest]);
    }

    if (arr.includes('/')) {
      const position = arr.findIndex(ele => ele === '/');
      const initial = arr.slice(0, position - 1);
      const rest = arr.slice(position + 2);
      const solution = parseFloat(arr[position - 1]) / parseFloat(arr[position + 1]);

      return calculate([...initial, formatNumber(solution), ...rest]);
    }

    if (arr.includes('+')) {
      const position = arr.findIndex(ele => ele === '+');
      const initial = arr.slice(0, position - 1);
      const rest = arr.slice(position + 2);
      const solution = parseFloat(arr[position - 1]) + parseFloat(arr[position + 1]);

      return calculate([...initial, formatNumber(solution), ...rest]);
    }

    if (arr.includes('-')) {
      const position = arr.findIndex(ele => ele === '-');
      const initial = arr.slice(0, position - 1);
      const rest = arr.slice(position + 2);
      const solution = parseFloat(arr[position - 1]) - parseFloat(arr[position + 1]);

      return calculate([...initial, formatNumber(solution), ...rest]);
    }
  };

  const formatNumber = number => {
    return number
      .toFixed(4)
      .replace(/[.,]0000$/, '')
      .toString();
  };

  return { operation, result, handleChange };
};

export default useCalculator;
