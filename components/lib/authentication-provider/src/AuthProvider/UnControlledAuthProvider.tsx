import { useCallback, useEffect } from 'react';
import { useAccessTokenState } from './useAccessTokenState';
import { AuthContext, ContextValue } from './AuthProviderContext';

interface UnControlledAuthProviderProps {
  children: any;
  onRefreshTokenFailure?: (error: any) => void;
  tokenRefreshWindow: number;
  onGetAccessToken: () => Promise<string>;
  pauseRefreshingAccessToken?: boolean;
}

export const UnControlledAuthProvider = (props: UnControlledAuthProviderProps) => {
  const [, setAccessToken] = useAccessTokenState();

  const startRefreshingAccessToken = useCallback(async (): Promise<
    NodeJS.Timeout | undefined
  > => {
    try {
      const accessToken = await props.onGetAccessToken();
      const decodedAccessToken = setAccessToken(accessToken);

      // refresh the token ${tokenRefreshWindow} milliseconds before expiration
      const remainingToExpiration = decodedAccessToken.exp * 1000 - Date.now();

      const millisecondsToNextCheck = Math.min(
        remainingToExpiration - props.tokenRefreshWindow,
        24 * 60 * 60 * 1000, // 24h is the max value for refresh interval
      );

      return setTimeout(startRefreshingAccessToken, millisecondsToNextCheck);
    } catch (err) {
      // means we don't have a proper refresh token so user should login
      props.onRefreshTokenFailure?.(err);
      return undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async (): Promise<any> => {
      if (!props.pauseRefreshingAccessToken) {
        /** we should refresh on page load as we store access token in memory */
        const timeout = await startRefreshingAccessToken();
        return () => {
          if (timeout) {
            clearTimeout(timeout);
          }
        };
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const context: ContextValue = {
    startRefreshingAccessToken,
  };

  return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
};
