import { isNil } from 'lodash';
import { RequireAtLeastOne } from './typings/RequireAtLeastOne';
import { UnControlledAuthProvider } from './AuthProvider/UnControlledAuthProvider';
import { ControlledAuthProvider } from './AuthProvider/ControlledAuthProvider';

type AuthProps = {
  children: any;
} & RequireAtLeastOne<{
  accessToken: string;
  refreshAccessToken: {
    onRefreshTokenFailure?: () => void;
    tokenRefreshWindow: number;
    onGetAccessToken: () => Promise<string>;
    pauseRefreshingAccessToken?: boolean;
  };
}>;

export const AuthProvider = (props: AuthProps) => {
  if (isNil(props.accessToken) && isNil(props.refreshAccessToken)) {
    throw Error('You should define one of accessToken or refreshToken props');
  }

  if (!isNil(props.accessToken) && !isNil(props.refreshAccessToken)) {
    // eslint-disable-next-line no-console
    console.warn(
      'You should define only one accessToken or refreshToken. [Controlled mode will proceed]',
    );
  }

  if (props.accessToken) {
    return (
      <ControlledAuthProvider accessToken={props.accessToken}>
        {props.children}
      </ControlledAuthProvider>
    );
  }

  return (
    <UnControlledAuthProvider {...props.refreshAccessToken!}>
      {props.children}
    </UnControlledAuthProvider>
  );
};
