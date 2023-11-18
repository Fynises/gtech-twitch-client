import { ConfigurationContextData } from '@/dto/dashboard/context-data';
import { Dispatch, SetStateAction, createContext } from 'react';

type ContextRecord = ConfigurationContextData;
type ContextDispatch = Dispatch<SetStateAction<ContextRecord>>;
type Context = [ContextRecord, ContextDispatch];

const ConfigurationContext = createContext<Context | null>(null);

export default ConfigurationContext;
