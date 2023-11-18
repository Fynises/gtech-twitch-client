'use client';
import api from '@/auth-util/authenticated-api-client';
import { useEffect, useState } from 'react';
import UrlDisplay from './url-display';
import UpdateButton from './update-button';
import { Box } from '@mui/material';
import { BG_GRAY, THEME_YELLOW } from '@/util/colors';

async function getWebsocketUid(): Promise<string> {
  const res = await api.get<string>('websocket-config/get');
  return res.data;
}

const WS_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
const COLOR = '#e3fc02';


export default function WebsocketConfig() {
  const [url, setUrl] = useState<string>('loading...');

  const onError = (e: unknown) => {
    console.error(`error occurred in getting websocket config uid: ${e}`);
    setUrl('ERROR');
  };

  useEffect(() => {
    getWebsocketUid()
      .then((res) => setUrl(`${WS_URL}?id=${res}`))
      .catch((e) => onError(e));
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 1,
      borderRadius: 2,
      backgroundColor: BG_GRAY,
      borderWidth: 2,
      borderColor: THEME_YELLOW,
      width: '60%',
    }}>
      <UrlDisplay url={url} />
      <UpdateButton setUid={setUrl} />
    </Box>
  );
}
