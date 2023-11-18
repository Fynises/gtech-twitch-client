import { THEME_YELLOW } from '@/util/colors';
import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)({
  backgroundColor: THEME_YELLOW,
  color: 'black',
}) as typeof Button;
