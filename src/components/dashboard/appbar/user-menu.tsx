'use client';
import { useState } from 'react';
import UserIcon from './user-icon';
import { Box, ButtonBase, Menu, MenuItem } from '@mui/material';
import localStorageHelper from '@/util/local-storage-helper';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorageHelper((ls) => ls.clear());
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  return (
    <Box>
      <ButtonBase onClick={(e) => handleClick(e)}>
        <UserIcon />
      </ButtonBase>
      <Menu
        id='user-menu'
        open={open}
        anchorEl={anchorEl}
        onClose={() => handleClose()}
      >
        <MenuItem onClick={() => handleLogout()}>
          logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
