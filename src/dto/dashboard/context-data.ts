import { ChannelRewardDataResponse } from './channel-reward-data-res';
import { ActivationConfigResponse } from './activation-config-res';

export interface ConfigurationContextData {
  channelRewardData: Record<string, ChannelRewardDataResponse>;
  activationConfig: Record<string, ActivationConfigResponse>;
}
