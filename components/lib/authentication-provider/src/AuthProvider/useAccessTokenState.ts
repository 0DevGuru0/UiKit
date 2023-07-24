import { useAtom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import jwtDecode from 'jwt-decode';
import { accessTokenAtom, storeAccessToken, userTokenAtom } from '../store';

type DecodedAccessToken = { exp: number } & Record<string, any>;
type IAccessTokenState = [
  DecodedAccessToken,
  (accessToken: string) => DecodedAccessToken,
];

export const useAccessTokenState = (): IAccessTokenState => {
  // !!! multiple sources of truth, we could have used useMemo
  const [decodedAccessToken, setDecodedAccessToken] = useAtom(userTokenAtom);
  const setAccessToken = useUpdateAtom(accessTokenAtom);

  return [
    decodedAccessToken,
    (accessToken) => {
      storeAccessToken(accessToken);
      setAccessToken(accessToken);
      const decodedToken = jwtDecode(accessToken) as DecodedAccessToken;
      setDecodedAccessToken(decodedToken);
      return decodedToken;
    },
  ];
};
