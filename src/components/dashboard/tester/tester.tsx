'use client';
import api from '@/auth-util/authenticated-api-client';
import { Box, Button, Grid, Slider, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { SyntheticEvent, useState } from 'react';
import { DurationSlider } from '../activation-config/form-elements/duration-slider';
import NumberSelect from './duration-select';
import { THEME_YELLOW } from '@/util/colors';
import { CustomButton } from '../styled-button';

interface WebsocketTestRequest {
  duration: number;
  power: number;
}

async function sendTest(req: WebsocketTestRequest): Promise<void> {
  await api.post('/websocket-test/test', req);
}

export default function WebsocketTester() {

  //set initially to 5
  const [durationState, setDurationState] = useState<number>(5);
  const [powerState, setPowerState] = useState<number>(50);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = () => {
    sendTest({ duration: durationState, power: powerState }).then(() => {
      console.log('successfully sent test request');
      enqueueSnackbar('successfully sent test message', { variant: 'success' });
    }).catch((e) => {
      console.error(`error occurred while sending test request: ${e}`);
      enqueueSnackbar('error occurred sending test request', { variant: 'error' });
    });
  };

  const handleChangeValue = (value: number | number[]) => {
    if (!(value instanceof Array)) {
      setDurationState(value);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      marginTop: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 1,
      borderRadius: 2,
      borderWidth: 2,
      borderColor: THEME_YELLOW,
      width: '60%'
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
        <NumberSelect
          label='duration: '
          suffix='s'
          bounds={[1, 120]}
          state={durationState}
          setState={setDurationState}
        />
        <NumberSelect
          label='power: '
          suffix='%'
          bounds={[1, 100]}
          state={powerState}
          setState={setPowerState}
        />
      </Box>
      <CustomButton variant='contained' onClick={() => handleSubmit()} sx={{
        marginLeft: 1,
      }}>
        send test
      </CustomButton>
    </Box>
  );
}
