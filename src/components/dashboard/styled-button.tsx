import { THEME_YELLOW } from '@/util/colors';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomButton = styled(Button)({
  backgroundColor: THEME_YELLOW,
  color: 'black',
}) as typeof Button;
