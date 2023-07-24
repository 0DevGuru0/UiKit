import styled from 'styled-components';

export interface ProgressBarProps {
  progress: number;
  progressColor?: string;
  backColor?: string;
  height?: number;
  className?: string;
}

export const ProgressBar = ({
  progress,
  height,
  progressColor,
  backColor,
  className,
}: ProgressBarProps) => {
  return (
    <Container height={height} className={className}>
      <Back height={height} backColor={backColor} />
      <Progress width={progress} height={height} backColor={progressColor} />
    </Container>
  );
};

interface ContainerProps {
  height?: number;
}

interface ProgressProps {
  height?: number;
  backColor?: string;
  width?: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '50px')};
`;

const Back = styled.div<ProgressProps>`
  position: absolute;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '50px')};
  background-color: ${({ backColor }) => (backColor ? backColor : 'transparent')};
`;

const Progress = styled.div<ProgressProps>`
  position: absolute;
  width: ${({ width }) => (width ? `${width}%` : '0')};
  height: ${({ height }) => (height ? `${height}px` : '50px')};
  background-color: ${({ backColor }) => (backColor ? backColor : '#000')};
`;
