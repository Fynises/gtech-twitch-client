'use client';
import { Box, Button, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import ConfigurationContext from '../context';
import api from '@/auth-util/authenticated-api-client';
import { produce } from 'immer';
import { ActivationConfigResponse } from '@/dto/dashboard/activation-config-res';
import { useSnackbar } from 'notistack';

async function createConfiguration(id: string): Promise<ActivationConfigResponse> {
  console.log(`create configuration id: ${id}`);
  const res = await api.post<ActivationConfigResponse>('/custom-rewards/create-activation-config', {
    configId: id
  });
  return res.data;
}

/**
 * id being channel reward id
 */
interface IdentifierProps {
  id: string;
}

export default function NewActivationConfigButton(props: IdentifierProps) {
  const [config, setConfig] = useContext(ConfigurationContext)!;

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    createConfiguration(props.id).then((res) => {
      enqueueSnackbar('successfully created new config', { variant: 'success' });
      setConfig(produce((draft) => {
        draft.activationConfig[props.id] = {
          id: res.id,
          channelRewardId: res.channelRewardId,
          isEnabled: res.isEnabled,
          activationConfig: res.activationConfig
        };
      }));
    }).catch((e) => {
      enqueueSnackbar('error occurred creating new config entry', { variant: 'error' });
      console.error(`error occurred creating new config entry: ${e}`);
    });
  };

  return (
    <Box sx={{ margin: 2 }}>
      <Tooltip title='this channel redemption does not have an associated configuration, create one'>
        <Button onClick={() => handleClick()} variant='contained'>
          create config
        </Button>
      </Tooltip>
    </Box>
  );
}
