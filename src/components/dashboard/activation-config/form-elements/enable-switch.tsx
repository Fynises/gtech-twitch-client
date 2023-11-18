'use client';
import { ChangeEvent, useContext } from 'react';
import ConfigurationContext from '../../context';
import { Box, Switch, Typography } from '@mui/material';
import { produce } from 'immer';
import { THEME_YELLOW } from '@/util/colors';

interface IdentifierProps {
  id: string;
}

export function EnableSwitch(props: IdentifierProps) {
  const [config, setConfig] = useContext(ConfigurationContext)!;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfig(produce((draft) => {
      draft.activationConfig[props.id].isEnabled = e.target.checked;
    }));
  };

  return (
    <Box>
      <Switch
        checked={config.activationConfig[props.id].isEnabled}
        aria-label='switch-enabled'
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
}

