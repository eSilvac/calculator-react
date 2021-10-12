import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackspace,
  faDivide,
  faEquals,
  faMinus,
  faPercentage,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const keyboardLayoutOptions = {
  iphone: [
    { value: 'clear', label: 'AC', type: 'extraOption' },
    { value: 'backspace', label: <FontAwesomeIcon icon={faBackspace} />, type: 'extraOption' },
    { value: 'percentage', label: <FontAwesomeIcon icon={faPercentage} />, type: 'extraOption' },
    { value: 'divide', label: <FontAwesomeIcon icon={faDivide} />, type: 'operator' },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 'times', label: <FontAwesomeIcon icon={faTimes} />, type: 'operator' },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 'minus', label: <FontAwesomeIcon icon={faMinus} />, type: 'operator' },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 'plus', label: <FontAwesomeIcon icon={faPlus} />, type: 'operator' },
    { value: 0, label: 0, extended: 'right' },
    { value: 'decimal', label: '.', type: 'number' },
    { value: 'solve', label: <FontAwesomeIcon icon={faEquals} />, type: 'solve' },
  ],
};
