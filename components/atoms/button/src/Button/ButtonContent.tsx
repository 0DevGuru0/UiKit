import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../Button';

type ButtonContentType = Pick<
  ButtonProps,
  'loading' | 'loadingIndicator' | 'label' | 'iconButtonMode'
> & { children: ReactNode };

export const ButtonContent: FC<ButtonContentType> = (props) => {
  const { label, children, iconButtonMode } = props;
  if (iconButtonMode) {
    return null;
  } else if (label) {
    return <Text>{label}</Text>;
  } else {
    return <>{children}</>;
  }
};

const Text = styled.span`
  display: flex;
  line-height: normal;
  flex-direction: row;
  justify-content: center;
`;
