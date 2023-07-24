import { useAccessTokenState } from './useAccessTokenState';
import { AuthContext, ContextValue } from './AuthProviderContext';
import { useEffect } from 'react';

interface ControlledAuthProviderProps {
  children: any;
  accessToken: string;
}

export const ControlledAuthProvider = (props: ControlledAuthProviderProps) => {
  const [, setAccessToken] = useAccessTokenState();

  useEffect(() => {
    setAccessToken(props.accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.accessToken]);

  const contextValue: ContextValue = {
    startRefreshingAccessToken: () => null,
  };

  return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  );
};
