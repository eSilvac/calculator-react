import { useState } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CalculatorValues = ({ operation, result, handleBackToHistory }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const calcRecord = JSON.parse(localStorage.getItem('old_calcs')) || null;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.ValueWrapper>
      <S.IconWrapper onClick={handleClick}>
        <FontAwesomeIcon icon={faHistory} />
      </S.IconWrapper>
      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose} value={null}>
        {calcRecord ? (
          calcRecord.map((record, idx) => (
            <MenuItem
              key={idx}
              onClick={() => {
                handleBackToHistory(record);
                handleClose();
              }}
              sx={{ minWidth: 120, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <S.MenuItemOperation>{record.operation.join(' ')}</S.MenuItemOperation>
              <S.MenuItemResult>{record.result}</S.MenuItemResult>
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleClose} sx={{ fontSize: 14 }}>
            No Math Records
          </MenuItem>
        )}
      </Menu>
      <S.Operation value={operation.join(' ')} disabled />
      <S.Result>{result}</S.Result>
    </S.ValueWrapper>
  );
};

export default CalculatorValues;
