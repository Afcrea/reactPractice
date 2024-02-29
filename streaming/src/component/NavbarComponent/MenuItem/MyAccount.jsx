import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MyAccountMenuItem = ({ onClose }) => {
    const handleMyAccountClick = () => {
      // 내 계정 클릭 시 수행할 동작 추가
      onClose(); // 메뉴 닫기
    };
  
    return (
      <MenuItem onClick={handleMyAccountClick} sx={{ color: 'blue' }}>
        <AccountCircleIcon sx={{ color: 'blue', marginRight: 1 }} />
        My account
      </MenuItem>
    );
};

export default MyAccountMenuItem;