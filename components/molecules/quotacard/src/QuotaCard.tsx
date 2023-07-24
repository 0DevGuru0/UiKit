import styled, { useTheme } from 'styled-components';

import { CircleCheckNormal, CircleDangerNormal, CircleInfoNormal } from '@avidkit/icons';
import { ProgressBar } from '@avidkit/progressbar';

export interface QuotaCardProps {
  masterTitle: string;
  secondaryTitle?: string;
  progressTitle: string;
  progressSecondaryTitle?: string;
  variant: 'SUCCESS' | 'WARNING' | 'DANGER';
  progress: number;
  className?: string;
}

export const QuotaCard = ({
  masterTitle,
  secondaryTitle,
  progressTitle,
  progressSecondaryTitle,
  variant,
  progress,
  className,
}: QuotaCardProps) => {
  const theme = useTheme();
  let Icon = null;
  let variantColor = '';
  switch (variant) {
    case 'SUCCESS':
      Icon = CircleCheckNormal;
      variantColor = theme.palette.success.main;
      break;
    case 'WARNING':
      Icon = CircleInfoNormal;
      variantColor = theme.palette.warning.main;
      break;
    case 'DANGER':
      Icon = CircleDangerNormal;
      variantColor = theme.palette.error.main;
      break;
  }
  return (
    <Container className={className}>
      <TitleContainer>
        <MasterTitle>{masterTitle}</MasterTitle>
        {secondaryTitle && <SecondaryTitle>/{secondaryTitle}</SecondaryTitle>}
      </TitleContainer>
      <IconContainer color={variantColor}>
        <Icon />
      </IconContainer>
      <ProgressContainer>
        <ProgressTitle>{progressTitle}</ProgressTitle>
        {progressSecondaryTitle && (
          <SecondaryTitle>/{progressSecondaryTitle}</SecondaryTitle>
        )}
      </ProgressContainer>
      <StyleProgress
        progress={progress}
        height={10}
        backColor={theme.palette.grey[800]}
        progressColor={variantColor}
      />
    </Container>
  );
};

interface ColorProps {
  color: string;
}

const Container = styled.div`
  width: 200px;
  height: 160px;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.palette.grey[300]};
  position: relative;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
`;

const MasterTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const SecondaryTitle = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const IconContainer = styled.div<ColorProps>`
  position: absolute;
  top: 10px;
  right: 10px;

  > svg {
    width: 25px;
    height: 25px;
    use,
    path {
      fill: ${({ color }) => color};
    }
  }
`;

const ProgressContainer = styled.div`
  position: absolute;
  bottom: 18px;
  left: 10px;
  display: flex;
  align-items: center;
`;

const ProgressTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyleProgress = styled(ProgressBar)`
  position: absolute;
  bottom: 0;
`;
