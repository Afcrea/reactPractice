import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import deleteCookie from '../../../CookieComponent/DeleteCookie'

const LogoutMenuItem = ({ onClose }) => {
  const handleLogout = () => {
    deleteCookie('LoginToken'); // 쿠키 삭제 함수 호출
    onClose(); // 메뉴 닫기
  };

  return (
    <MenuItem onClick={handleLogout} sx={{ color: 'red' }}>
      <ExitToAppIcon sx={{ color: 'red', marginRight: 1 }} />
      Log out
    </MenuItem>
  );
};

export default LogoutMenuItem;
