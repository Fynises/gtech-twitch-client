'use client';
import api from '@/auth-util/authenticated-api-client';
import { UserDetailResponse } from '@/dto/dashboard/user-detail-response';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

async function getUserDetails(): Promise<UserDetailResponse> {
  const res = await api.get<UserDetailResponse>('user/get-details');
  return res.data;
}

export default function UserIcon() {
  const [userName, setUserName] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | null>(null);

  useEffect(() => {
    getUserDetails().then((res) => {
      setUserName(res.name);
      setProfile(res.profile);
    }).catch((e) => {
      console.error(`error occurred getting user details: ${e}`);
    });
  }, []);

  if (userName !== null && profile !== null) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        paddingX: 1
      }}>
        <Typography color='black'>
          {userName}
        </Typography>
        <Image alt='profile-picture' src={profile} width={32} height={32} style={{ borderRadius: '50%' }} />
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: 'flex' }}>
        loading...
      </Box>
    );
  }
}
