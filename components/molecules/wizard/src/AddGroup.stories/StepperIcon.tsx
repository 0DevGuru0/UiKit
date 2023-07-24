import { FC } from 'react';

import styled from 'styled-components';

interface StepperIconProps {
  active?: boolean;
  completed?: boolean;
}

export const StepperIcon: FC<StepperIconProps> = ({ active, completed }) => {
  if (active) {
    return <ActiveIcon />;
  }
  if (completed) {
    return <CompleteIcon />;
  }
  return <Icon />;
};

const Icon = styled.div`
  margin: 4px 0;
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.grey[500]};
  border-radius: 3px;
`;

const ActiveIcon = styled(Icon)`
  height: 4px;
`;

const CompleteIcon = styled(ActiveIcon)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
