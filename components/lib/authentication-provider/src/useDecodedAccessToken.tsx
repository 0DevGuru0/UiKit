import { useAtomValue } from 'jotai';
import { userTokenAtom } from './store';

// !!! no need to use Jotai when we have react context
export const useDecodedAccessToken = () => useAtomValue(userTokenAtom);
