'use client';
import { useCallback, useEffect, useState } from 'react';
import api from '@/auth-util/authenticated-api-client';
import localStorageHelper from '@/util/local-storage-helper';
import { useRouter } from 'next/navigation';

async function validateJwt(): Promise<void> {
  return await api.get('/auth/validate');
}

interface DashboardAuthProviderProps {
  children: React.ReactNode;
}

export default function DashboardAuthProvider({ children }: DashboardAuthProviderProps) {

  const router = useRouter();

  const [authenticating, setAuthenticating] = useState<boolean>(true);

  const onFail = useCallback((error: unknown) => {
    console.error(`error occurred while validating jwt: ${error}`);
    localStorageHelper((ls) => ls.clear());
    router.push('/');
  }, [router]);

  useEffect(() => {
    try {
      validateJwt().then(() => setAuthenticating(false))
        .catch((e) => onFail(e));
    } catch (e) {
      onFail(e);
    }
  }, [onFail]);

  if (authenticating) {
    return (<>authenticating...</>);
  } else {
    return (<>{children}</>);
  }
}
