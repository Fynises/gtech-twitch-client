'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AuthParams from './auth-params';
import api from '@/auth-util/api-client';
import { Box } from '@mui/material';
import localStorageHelper from '@/util/local-storage-helper';

async function handleTwitchCallback(params: AuthParams): Promise<string> {
  const res = await api.post<string>('/auth/login', params);
  return res.data;
}

export default function CallbackPage() {

  const router = useRouter();

  useEffect(() => {
    const searchParams = new AuthParams(new URLSearchParams(document.location.search));
    console.log(`params: ${JSON.stringify(searchParams)}`);
    handleTwitchCallback(searchParams).then((jwt) => {
      localStorageHelper((ls) => ls.setItem('jwt', jwt))!;
      router.push('/dashboard');
    }).catch((e) => {
      console.error(`error has occurred: ${e}`);
      router.push('/');
    });
  }, [router]);

  return (
    <Box>
      authenticating...
    </Box>
  );
}
