import { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { Close as CloseSvg } from '@avidkit/icons';

export interface ImageUploadProps {
  image?: string;
  progress?: number;
  backgroundColor?: string;
  progressBarColor?: string;
  children?: ReactNode;
  handleFile: (args?: any) => void;
  onDelete?: () => void;
  onCancel?: () => void;
}

export const ImageUpload = (props: ImageUploadProps) => {
  const {
    image,
    progress,
    backgroundColor,
    progressBarColor,
    children,
    handleFile,
    onDelete,
    onCancel,
  } = props;

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!progress) {
      hiddenFileInput?.current!.click();
    } else {
      if (onCancel) onCancel();
    }
  };

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <Container>
      {image ? (
        <ImageContainer>
          <StyledImage src={image} loading="lazy" />
          {onDelete && (
            <DeleteIcon onClick={onDelete}>
              <CloseSvg width={24} height={24} />
            </DeleteIcon>
          )}
        </ImageContainer>
      ) : (
        <>
          <UploadFileButton onClick={handleClick} $backgroundColor={backgroundColor}>
            <ProgressBar $progress={progress} $backgroundColor={progressBarColor} />
            <Children>{children}</Children>
          </UploadFileButton>
          <HiddenInput
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={handleChange}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 8px;
  overflow: hidden;
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: 0;
  width: 84px;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[300]};
    opacity: 0.8;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }

  &:not(:hover) ${DeleteIcon} {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const UploadFileButton = styled.div<{ $backgroundColor?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ?? theme.palette.grey[300]};
  overflow: hidden;
`;

interface ProgressBarProps {
  $progress?: number;
  $backgroundColor?: string;
}

const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  bottom: 0;
  width: 90px;
  height: ${({ $progress }) => ($progress ? `${$progress}%` : 0)};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ?? theme.palette.grey[500]};
  transition: all 0.5s linear;
`;

const Children = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HiddenInput = styled.input`
  display: none;
`;
