'use client';
import api from '@/auth-util/authenticated-api-client';
import { Button, Tooltip } from '@mui/material';
import { useSnackbar } from 'notistack';

async function sendDebug(): Promise<void> {
  return await api.post('/eventsub-debug/reset');
}

export default function DebugButton() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    sendDebug().then(() => {
      enqueueSnackbar('successfully sent debug', { variant: 'success' });
    }).catch((e) => {
      console.error(`error occurred sending debug: ${e}`);
      enqueueSnackbar('debug send error', { variant: 'error' });
    });
  };

  return (
    <>
      <Tooltip title='press this to reauthenticate with the twitch API'>
        <Button onClick={() => handleClick()}>
          debug
        </Button>
      </Tooltip>
    </>
  );
}
