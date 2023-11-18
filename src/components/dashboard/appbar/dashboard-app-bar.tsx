import { AppBar, Box, Typography } from '@mui/material';
import UserMenu from './user-menu';

const COLOR = '#e3fc02';

export default function DashboardAppBar() {
  return (
    <Box>
      <AppBar position='relative' sx={{
        paddingY: 1,
        paddingX: 3,
        backgroundColor: COLOR,
        marginBottom: 2,
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography color='black' variant='h5' >
              Giggletech Twitch
            </Typography>
          </Box>
          <Box>
            <UserMenu />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
