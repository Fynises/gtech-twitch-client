'use client';
import { useContext } from 'react';
import ConfigurationContext from './context';
import ConfigurationItem from './configuration-item';
import { Box } from '@mui/material';
import React from 'react';

export default function ConfigList() {
  const [config, _setConfig] = useContext(ConfigurationContext)!;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 4
    }}>
      {
        Object.entries(config.channelRewardData).map((val, idx) => (
          <Box key={idx} sx={{ marginBottom: 1, width: '100%' }}>
            <ConfigurationItem id={val[0]} />
          </Box>
        ))
      }
    </Box>
  );
}
