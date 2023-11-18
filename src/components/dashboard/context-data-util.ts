import { ActivationConfigResponse } from '@/dto/dashboard/activation-config-res';
import { ChannelRewardDataResponse } from '@/dto/dashboard/channel-reward-data-res';
import api from '@/auth-util/authenticated-api-client';
import _ from 'lodash';
import { ConfigurationContextData } from '@/dto/dashboard/context-data';

interface ChannelRewardResponseData {
  data: ChannelRewardDataResponse[];
}

interface ActivationConfigResponseData {
  data: ActivationConfigResponse[];
}

async function getChannelRewards(): Promise<ChannelRewardDataResponse[]> {
  const res = await api.get<ChannelRewardResponseData>('/custom-rewards/get-all');
  return res.data.data;
}

async function getActivationConfig(ids: string[]): Promise<ActivationConfigResponse[]> {
  const res = await api.post<ActivationConfigResponseData>('/custom-rewards/get-activation-params', {
    query: ids
  });
  return res.data.data;
}

export async function getContextData(): Promise<ConfigurationContextData> {
  const channelRewards = await getChannelRewards();
  const activationConfig = await getActivationConfig(channelRewards.map((e) => e.id));
  const channelRewardMap: Record<string, ChannelRewardDataResponse> = _.keyBy(channelRewards, 'id');
  const activationConfigMap: Record<string, ActivationConfigResponse> = _.keyBy(activationConfig, 'channelRewardId');
  return {
    channelRewardData: channelRewardMap,
    activationConfig: activationConfigMap
  };
}
