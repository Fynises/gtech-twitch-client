type ActivationModifierValue = string | number;

export interface ActivationConfigDto {
  duration: number;
  power: number;
  type: PowerCurvesEnum;
  activationModifiers: Record<string, ActivationModifierValue> | null;
}

export enum PowerCurvesEnum {
  Constant = 'constant',
}
