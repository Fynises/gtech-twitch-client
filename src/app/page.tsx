import { Box, Container, Typography } from '@mui/material';
import LoginButton from './login-button';

export default function Home() {
  return (
    <>
      <Container maxWidth='lg' sx={{ paddingTop: 4 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography variant='h4'>
            Giggletech twitch
          </Typography>
          <Typography>
            twitch integration for giggletech haptics
            <br></br>
            please support the main project
          </Typography>
          <LoginButton />
        </Box>
      </Container>
    </>
  );
}
