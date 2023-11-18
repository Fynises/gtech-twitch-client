'use client';
import { useContext, useState } from 'react';
import ConfigurationContext from './context';
import { Box, Card, Divider, Typography } from '@mui/material';
import { ChannelRewardData } from '@/dto/dashboard/channel-reward-data';
import ActivationConfigForm from './activation-config/activation-config-form';
import RewardCard from './card-display/reward-card';

interface ConfigurationItemProps {
  id: string;
}

export default function ConfigurationItem(props: ConfigurationItemProps) {
  const [config, setConfig] = useContext(ConfigurationContext)!;
  const [openTray, setOpenTray] = useState<boolean>(false);

  return (
    <Box>
      <RewardCard id={props.id} openTrayState={openTray} setOpenTrayState={setOpenTray} />
      {openTray && (<>
        <Divider sx={{ backgroundColor: 'white' }} />
        <ActivationConfigForm id={props.id} />
      </>)}
    </Box>
  );
}

/*

<RewardCard id={props.id} />
    <Card variant='outlined' sx={{
      display: 'flex',
      flexDirection: 'column',
      borderWidth: 'medium',
      borderColor: '#e3fc02',
      backgroundColor: '#1f1f21',
      color: 'white',
      padding: 1
    }}>
      <Typography sx={{ alignContent: 'flex-start' }}>
        {`Title: ${config.channelRewardData[props.id].title}`}
      </Typography>
      <Divider sx={{ backgroundColor: 'white' }} />
      <ActivationConfigForm id={props.id} />
    </Card>

*/
