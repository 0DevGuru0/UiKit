import { createContext } from 'react';

export interface ContextValue {
  startRefreshingAccessToken?: () => void;
}

export const AuthContext = createContext<ContextValue>({});
