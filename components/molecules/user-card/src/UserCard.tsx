import { FC } from 'react';
import styled from 'styled-components';
import { ReactElement } from 'react';
import { MoreOptions, MoreOptionsProps } from '@avidkit/more-options';

export interface IUser {
  name: string;
  membership: string;
  avatar?: ReactElement;
  actions?: Extract<MoreOptionsProps, 'actions'>;
}

export interface UserCardProps {
  user: IUser;
  isOptionsOpen?: boolean;
  className?: string;
  onClick?: (value?: any) => void;
}

export const UserCard: FC<UserCardProps> = (props) => {
  const { user, className } = props;
  const { name, membership, avatar, actions } = user;

  return (
    <Container className={className}>
      <Column>
        {avatar && <AvatarContainer>{avatar}</AvatarContainer>}
        <Content>
          <Name>{name}</Name>
          <Membership>{membership}</Membership>
        </Content>
      </Column>
      {actions && (
        <StyledMoreOption sections={[actions]} size={'Lg'} variant={'horizontal'} />
      )}
    </Container>
  );
};

const StyledMoreOption = styled(MoreOptions)`
  a {
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary[100]} !important;
    }
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  width: calc(100% - 10px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AvatarContainer = styled.div`
  margin-right: 12px;
  height: 36px;
  width: 36px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    height: 36px;
    width: 36px;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  white-space: normal;
`;

const Name = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;

const Membership = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  font-size: 14px;
`;
