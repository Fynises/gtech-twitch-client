'use client';
import { ConfigurationContextData } from '@/dto/dashboard/context-data';
import { useState } from 'react';
import ConfigurationContext from './context';
import ConfigList from './config-list';
import WebsocketConfig from './ws-config/websocket-config';
import WebsocketTester from './tester/tester';
import { Box } from '@mui/material';
import DebugButton from './debug/debug-button';

interface RewardConfigListContainerProps {
  state: ConfigurationContextData;
}

/**
 * builds and provides a context wrapper for the configuration list
 */
export default function RewardConfigListContainer(props: RewardConfigListContainerProps) {
  const [state, setState] = useState<ConfigurationContextData>(props.state);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ConfigurationContext.Provider value={[state, setState]}>
        <WebsocketConfig />
        <WebsocketTester />
        <DebugButton />
        <ConfigList />
      </ConfigurationContext.Provider>
    </Box>
  );
}
