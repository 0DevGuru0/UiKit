import { Image } from '@avidkit/icons';
import { Typography } from '@mui/material';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { DetachedDropzoneProps } from '../types';

export const UploadZone: FC<
  Pick<
    DetachedDropzoneProps,
    'validExtensions' | 'dragFileInfo' | 'acceptableFileText' | 'dragRejectText'
  > & { isDragReject?: boolean }
> = (props) => {
  const {
    dragFileInfo,
    validExtensions,
    acceptableFileText,
    isDragReject,
    dragRejectText,
  } = props;

  return (
    <Content hasError={isDragReject}>
      <ImageWrapper $isDragReject={isDragReject}>
        <Image />
      </ImageWrapper>
      <Typography variant="body2">
        {isDragReject ? dragRejectText : dragFileInfo}
      </Typography>
      <Typography variant="body2">
        ({acceptableFileText ?? `Accepts: ${validExtensions.join(',')}`})
      </Typography>
    </Content>
  );
};

const Content = styled.div<{ hasError?: boolean }>`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  min-height: 144px;
  width: 100%;
  padding: 33px;
  border: 1px dashed ${({ theme }) => theme.palette.grey[400]};
  border-radius: 8px;
  ${({ theme, hasError }) =>
    hasError &&
    css`
      color: ${theme.palette.error[500]};
      border: dashed 1px ${theme.palette.error[500]};
    `}
`;

const ImageWrapper = styled.div<{ $isDragReject?: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $isDragReject }) =>
    $isDragReject ? theme.palette.error[200] : theme.palette.primary[200]};
  border-radius: 8px;

  svg {
    width: 18px;
    height: 18px;
    path,
    use {
      fill: ${({ theme, $isDragReject }) =>
        $isDragReject ? theme.palette.error.main : theme.palette.primary.main};
    }
  }
`;
