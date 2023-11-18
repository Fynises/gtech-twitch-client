'use client';
import { Box, Button, Slider, Switch, Table, TableCell, TableContainer, TableRow } from '@mui/material';
import ConfigurationContext from '../context';
import { ChangeEvent, useContext, useState } from 'react';
import api from '@/auth-util/authenticated-api-client';
import { produce } from 'immer';
import { ActivationConfigResponse } from '@/dto/dashboard/activation-config-res';
import { useSnackbar } from 'notistack';
import * as FormElements from './form-elements/form-elements';

type UpdateRequest = ActivationConfigResponse;

interface ActivationConfigUpdateRequest {
  id: string;
  enable: boolean;
  duration: number;
}

async function sendUpdate(body: UpdateRequest): Promise<void> {
  return await api.put('/custom-rewards/update', body);
}

interface ConfigIdProps {
  id: string;
}

const HEADER_WIDTH = '20%';

export default function ActivationConfigFormBody(props: ConfigIdProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [config, _setConfig] = useContext(ConfigurationContext)!;

  const handleSave = () => {
    sendUpdate({
      id: config.activationConfig[props.id].id,
      channelRewardId: props.id,
      isEnabled: config.activationConfig[props.id].isEnabled,
      activationConfig: config.activationConfig[props.id].activationConfig,
    }).then(() => {
      console.log(`successfully updated activation config for id: ${props.id}`);
      enqueueSnackbar('successfully updated', { variant: 'success' });
    }).catch((e) => {
      console.error(`error occurred updating activation config id: ${props.id}: ${e}`);
      enqueueSnackbar('error occurred saving configuration', { variant: 'error' });
    });
  };

  return (
    <Box sx={{
      color: 'white',
      backgroundColor: '#444444',
      paddingX: 4,
      paddingBottom: 2
    }}>
      <TableContainer >
        <Table size='small'>
          <TableRow>
            <TableCell width={HEADER_WIDTH}>Enable</TableCell>
            <TableCell><FormElements.EnableSwitch id={props.id} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell width={HEADER_WIDTH}>Duration</TableCell>
            <TableCell><FormElements.DurationSlider id={props.id} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell width={HEADER_WIDTH}>Power</TableCell>
            <TableCell><FormElements.PowerSlider id={props.id} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell width={HEADER_WIDTH}>Curve Selector</TableCell>
            <TableCell><FormElements.CurveSelector /></TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Button variant='contained' disableElevation onClick={() => handleSave()} sx={{
        marginTop: 1
      }}>
        save
      </Button>
    </Box>

  );
}
