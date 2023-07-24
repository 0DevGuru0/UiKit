import styled from 'styled-components';
import { LinearProgress } from '@mui/material';
import { IconButton } from '@avidkit/icon-button';
import { Close, Play, Pause } from '@avidkit/icons';
import { useState } from 'react';

export interface ProgressProps {
  value?: number;
  onStop?: () => void | Promise<void>;
  onResume?: () => void | Promise<void>;
  onPause?: () => void | Promise<void>;
}

export const Progress = ({ value, onPause, onResume, onStop }: ProgressProps) => {
  const [paused, setPaused] = useState(false);

  if (!value) {
    return null;
  }

  return (
    <Container>
      <FullProgress variant="determinate" color="primary" value={value} />
      {onResume && onPause && (
        <IconButton
          variant="Contained"
          color="Normal"
          title={paused ? 'Resume' : 'Pause'}
          icon={paused ? <Play /> : <Pause />}
          onClick={(e) => {
            e.stopPropagation();
            setPaused((prev) => !prev);
            if (paused) {
              onResume();
            } else {
              onPause();
            }
          }}
        />
      )}
      {onStop && (
        <IconButton
          variant="Contained"
          color="Normal"
          title="Stop"
          icon={<Close />}
          onClick={(e) => {
            e.stopPropagation();
            onStop?.();
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
`;

const FullProgress = styled(LinearProgress)`
  width: 100%;
`;
