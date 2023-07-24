import { FC, ReactNode } from 'react';

import styled from 'styled-components';

export interface TaskStateProps {
  label?: string;
  updateDate?: string;
  isHovered: boolean;
  onClick?: () => void;
}

const SimpleWrapper: FC<{ children: ReactNode }> = ({ children }) => <>children</>;

export const TaskState: FC<TaskStateProps> = ({
  label,
  updateDate,
  isHovered,
  onClick,
}) => {
  return (
    <MainContainer>
      <LeftContainer>
        <StatusContainer>{label}</StatusContainer>
        {updateDate && (
          <LastUpdateContainer>last update: {updateDate}</LastUpdateContainer>
        )}
      </LeftContainer>
      {isHovered && onClick && (
        <SimpleWrapper>
          <Button onClick={onClick}>ArrowSVG</Button>
        </SimpleWrapper>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
  background-color: transparent;
  font-size: ${({ theme }) => theme.typography.fontSize};
  height: 100%;
`;

const LeftContainer = styled.div`
  margin: auto 36px auto 0;
`;

const LastUpdateContainer = styled.div`
  margin-top: 2px;
  line-height: 18px;
  font-weight: normal;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StatusContainer = styled.div`
  width: max-content;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
  padding: 3px 12px;
`;

const Button = styled.div`
  width: 18px;
  height: 18px;
  padding: 3px;
  margin: auto 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  ${MainContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  & > svg {
    width: 18px;
    height: 18px;
    margin: auto;
  }
  & > svg path {
    fill: ${({ theme }) => theme.palette.text.primary};
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    & > svg path {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
