import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';

const ProfileMenuItem = ({ onClose }) => {
  const handleProfileClick = () => {
    // 프로파일 클릭 시 수행할 동작 추가
    onClose(); // 메뉴 닫기
  };

  return (
    <MenuItem onClick={handleProfileClick} sx={{ color: 'green' }}>
      <PersonIcon sx={{ color: 'green', marginRight: 1 }} />
      Profile
    </MenuItem>
  );
};

export default ProfileMenuItem;