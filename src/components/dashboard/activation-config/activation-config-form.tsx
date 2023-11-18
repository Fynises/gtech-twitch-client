'use client';
import { useContext } from 'react';
import ConfigurationContext from '../context';
import NewActivationConfigButton from './new-activation-config-button';
import ActivationConfigFormBody from './activation-config-form-body';

interface IdentifierProps {
  id: string;
}

export default function ActivationConfigForm(props: IdentifierProps) {
  const [config, _setConfig] = useContext(ConfigurationContext)!;
  if (config.activationConfig[props.id] === undefined) {
    return (
      <>
        <NewActivationConfigButton id={props.id} />
      </>
    );
  } else {
    return (
      <>
        <ActivationConfigFormBody id={props.id}/>
      </>
    );
  }
}
