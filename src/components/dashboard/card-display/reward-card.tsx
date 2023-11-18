'use client';
import { Dispatch, useContext } from 'react';
import ConfigurationContext from '../context';
import { Box, Card, IconButton, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

interface IdentifierProps {
  id: string;
  openTrayState: boolean;
  setOpenTrayState: Dispatch<boolean>
}

export default function RewardCard(props: IdentifierProps) {
  const [config, setConfig] = useContext(ConfigurationContext)!;

  const handleSettings = () => {
    props.setOpenTrayState(!props.openTrayState);
  };

  return (
    <Card elevation={0} sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 1,
      color: 'white',
      backgroundColor: '#333333'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{
          backgroundColor: config.channelRewardData[props.id].backgroundColor,
          marginX: 1
        }}>
          <Image
            aria-label='reward-image'
            src={config.channelRewardData[props.id].image}
            alt={''}
            width={32}
            height={32}
          />
        </Box>
        <Typography>{`Title: ${config.channelRewardData[props.id].title}`}</Typography>
      </Box>
      <Tooltip title={'open settings'}>
        <IconButton onClick={() => handleSettings()} sx={{ color: 'white' }}>
          {props.openTrayState ? (<><ArrowUpIcon /></>) : (<><ArrowDownIcon /></>)}
        </IconButton>
      </Tooltip>
    </Card>
  );
}
