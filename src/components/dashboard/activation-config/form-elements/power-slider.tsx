'use client';
import { useContext, useState } from 'react';
import ConfigurationContext from '../../context';
import { produce } from 'immer';
import { Box, Slider, Typography } from '@mui/material';
import { THEME_YELLOW } from '@/util/colors';

interface IdentifierProps {
  id: string;
}

export function PowerSlider(props: IdentifierProps) {
  const [config, setConfig] = useContext(ConfigurationContext)!;
  const [tempValue, setTempValue] = useState<number>(config.activationConfig[props.id].activationConfig.power);

  const handleChange = (value: number | number[]) => {
    if (!(value instanceof Array)) {
      setTempValue(value);
    }
  };

  const handleCommit = () => {
    setConfig(produce((draft) => {
      draft.activationConfig[props.id].activationConfig.power = tempValue;
    }));
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <Typography>
        {`${tempValue}%`}
      </Typography>
      <Slider sx={{ marginLeft: 4, color: THEME_YELLOW }}
        value={tempValue}
        onChange={(_e, value) => handleChange(value)}
        onChangeCommitted={() => handleCommit()}
        min={1}
        max={100}
      />
    </Box>
  );
}
