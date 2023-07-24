import styled, { css } from 'styled-components';

import { Tooltip } from '@avidkit/tooltip';
import { BellFill } from '@avidkit/icons';

export interface NotificationProps {
  status: 'seen' | 'new';
  className?: string;
  onNotificationClick: () => void;
}

export const Notification = ({
  status,
  className,
  onNotificationClick,
}: NotificationProps) => {
  const hasNewNotification = status === 'new';
  return (
    <Tooltip title="Notification" aria-label="Notification">
      <MainContainer
        className={className}
        hasNewNotification={hasNewNotification}
        onClick={() => onNotificationClick()}
      >
        {hasNewNotification && <Badge />}
        <BellIcon />
      </MainContainer>
    </Tooltip>
  );
};

const BellIcon = styled(BellFill)`
  stroke: ${({ theme }) => theme.palette.grey[600]};
  fill: ${({ theme }) => theme.palette.grey[600]};
`;

interface IMainContainer {
  hasNewNotification: boolean;
}
const MainContainer = styled.div<IMainContainer>`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > svg {
    pointer-events: none;
    width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.palette.grey[400]};
    }
  }

  ${({ hasNewNotification, theme }) =>
    hasNewNotification &&
    css`
      & > svg path {
        fill: ${theme.palette.grey[600]};
      }
    `}

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.grey[100]};

    & > svg path {
      fill: ${({ theme }) => theme.palette.grey[600]};
    }
  }
`;

const Badge = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  right: 5px;
  pointer-events: none;
  border: 2px solid ${({ theme }) => theme.palette.error.dark};
  background-color: ${({ theme }) => theme.palette.error.dark};
`;
