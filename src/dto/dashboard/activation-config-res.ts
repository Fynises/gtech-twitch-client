import { ActivationConfigDto } from './activation-config-dto';

/**
 * on server its typed as ChannelRewardDto
 */
export interface ActivationConfigResponse {
  id: string;
  channelRewardId: string;
  isEnabled: boolean;
  activationConfig: ActivationConfigDto;
}
