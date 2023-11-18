'use client';
import { getContextData } from '@/components/dashboard/context-data-util';
import RewardConfigListContainer from '@/components/dashboard/reward-config-list-container';
import { ConfigurationContextData } from '@/dto/dashboard/context-data';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [contextState, setContextState] = useState<ConfigurationContextData | null>(null);

  useEffect(() => {
    getContextData().then((res) => {
      setContextState(res);
    }).catch((e) => console.error(`error occurred getting configs: ${e}`));
  }, []);

  if (contextState === null) {
    return (<>loading...</>);
  } else {
    return (
      <>
        <RewardConfigListContainer state={contextState} />
      </>
    );
  }
}
