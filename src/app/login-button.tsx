'use client';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function LoginButton() {

  const router = useRouter();

  const handleClick = () => {
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_TWITCH_AUTH_REDIRECT,
      response_type: 'code',
      scope: process.env.NEXT_PUBLIC_TWITCH_AUTH_SCOPE,
      state: uuidv4(),
    }).toString();
    const fullUrl = process.env.NEXT_PUBLIC_TWITCH_AUTH_URL + params;
    console.log(`made url: ${fullUrl}`);
    router.push(fullUrl);
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography variant='body1'>
              sign in with twitch
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
