'use client';
import { THEME_YELLOW } from '@/util/colors';
import { Box, Card, Divider, Grid, Slider, Typography } from '@mui/material';
import { Dispatch } from 'react';

interface DurationSelectProps {
  label: string;
  suffix: string;
  bounds: [number, number];
  state: number;
  setState: Dispatch<number>
}

export default function NumberSelect(props: DurationSelectProps) {
  const handleChange = (value: number | number[]) => {
    if (!(value instanceof Array)) props.setState(value);
  };

  return (
    <Card elevation={0} sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 1,
      paddingX: 1,
      borderRadius: 2,
      backgroundColor: '#343438',
      color: 'white'
    }}>
      <Typography>
        {`${props.label}${props.state}${props.suffix}`}
      </Typography>
      <Divider orientation='vertical' sx={{ backgroundColor: 'white' }} />
      <Slider sx={{ width: 100, color: THEME_YELLOW }}
        value={props.state}
        onChange={(_e, value) => handleChange(value)}
        min={props.bounds[0]}
        max={props.bounds[1]}
      />
    </Card>
  );
}
