'use client';
import api from '@/auth-util/authenticated-api-client';
import { BG_GRAY, THEME_YELLOW } from '@/util/colors';
import { Button } from '@mui/material';
import { Dispatch } from 'react';
import { CustomButton } from '../styled-button';
import { useSnackbar } from 'notistack';

async function update(): Promise<string> {
  const res = await api.put<string>('websocket-config/update');
  return res.data;
}

interface UpdateButtonProps {
  setUid: Dispatch<string>
}

const WS_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

export default function UpdateButton(props: UpdateButtonProps) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    update().then((res) => {
      enqueueSnackbar('successfully updated', { variant: 'success' });
      props.setUid(`${WS_URL}/${res}`);
    }).catch((e) => {
      enqueueSnackbar('error occurred while updating', { variant: 'error' });
      console.error(`error occurred updating websocketUid ${e}`);
      props.setUid('ERROR');
    });
  };

  return (
    <>
      <CustomButton variant='contained' onClick={() => handleClick()} sx={{ paddingX: 1 }}>
        update
      </CustomButton>
    </>
  );
}
