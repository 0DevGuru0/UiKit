import { atom } from 'jotai';

export const userTokenAtom = atom<any | undefined>(undefined);
export const accessTokenAtom = atom<string | undefined>(undefined);

// this is our in memory storage for user's JWT Access Token
// We don't store this in local-storage or cookie because of security reasons
let accessToken: string | undefined;
export const getAccessToken = (): string | undefined => accessToken;
export const storeAccessToken = (at: string): void => {
  accessToken = at;
};
