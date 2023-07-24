import { FC, useCallback } from 'react';

import { Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import styled, { css, useTheme } from 'styled-components';

import { Image, Preview, Trash } from '@avidkit/icons';

import { DropzoneProps } from './Dropzone';
import { DropZoneFile, File } from './Dropzone/File';
import { Progress } from './Dropzone/Progress';

export interface ControlledDropzoneProps extends DropzoneProps {
  files: DropZoneFile[];
  onChange: (files: DropZoneFile[]) => void;
}

const getAccept = (accept: ControlledDropzoneProps['accept']) =>
  Array.isArray(accept) ? accept.join(', ') : accept;

export const ControlledDropzone: FC<ControlledDropzoneProps> = ({
  files,
  maxFiles = 1,
  accept,
  acceptText = 'Accept:',
  acceptableFileText,
  onChange,
  progress,
  dragFileInfo = (
    <>
      Drag your file here or <Browse>browse</Browse>
    </>
  ),
  onPause,
  onResume,
  onStop,
  onDelete,
  errorMessage,
  className,
  displayFileData,
  showPreview,
  showPreviewLabel,
  deleteLabel,
  uploadFileIcon,
}) => {
  const theme = useTheme();
  const onDrop = useCallback(
    (acceptedFiles: DropZoneFile[]) => {
      onChange(acceptedFiles);
    },
    [files, onChange],
  );
  const onDeleteFile = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, fileIndex: number) => {
      e.stopPropagation();
      if (onDelete) {
        onDelete(e, fileIndex);
      }
    },
    [files, onDelete],
  );
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles,
    accept,
    onDrop,
  });
  const uploadFinished = progress && progress === 100;
  const showProgress = !uploadFinished;

  return (
    <Container
      {...getRootProps({ refKey: 'innerRef' })}
      className={className}
      hasError={files.length > 0 && Boolean(errorMessage)}
    >
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <Files>
          {files.map((file, index) => (
            <FileWrapper key={file.name}>
              <File
                file={file}
                displayFileData={displayFileData}
                errorMessage={errorMessage}
                fileIcon={uploadFileIcon}
              />
              <IconsWrapper>
                {showPreview && uploadFinished ? (
                  <IconWrapper
                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                      e.stopPropagation();
                      showPreview(index);
                    }}
                    hoverColor={theme.palette.primary[100]}
                    color={theme.palette.primary[500]}
                  >
                    <Preview />
                    {showPreviewLabel ?? 'Preview'}
                  </IconWrapper>
                ) : null}
                {onDelete && uploadFinished ? (
                  <IconWrapper
                    color={theme.palette.error[500]}
                    hoverColor={theme.palette.error[100]}
                    onClick={(e) => onDeleteFile(e, index)}
                  >
                    <Trash />
                    {deleteLabel ?? 'Delete'}
                  </IconWrapper>
                ) : null}
              </IconsWrapper>
            </FileWrapper>
          ))}
          {showProgress && (
            <Progress
              value={progress}
              onPause={onPause}
              onResume={onResume}
              onStop={onStop}
            />
          )}
        </Files>
      ) : (
        <Content>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <Typography variant="body2">{dragFileInfo}</Typography>
          <Typography variant="body2">
            {acceptText} {acceptableFileText ?? getAccept(accept)}
          </Typography>
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div.attrs((props: { hasError: boolean }) => props)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px 0 0;
  padding: 36px 24px;
  border: 1px dashed ${({ theme }) => theme.palette.grey[400]};
  border-radius: 8px;
  cursor: pointer;
  ${({ theme, hasError }) =>
    css`
          border: dashed 1px ${
            hasError ? theme.palette.error.dark : theme.palette.grey[400]
          }};
        `}
`;

const Content = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const Browse = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 4px;

  svg {
    width: 18px;
    height: 18px;
    path,
    use {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const Files = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface IconWrapperProps {
  color: string;
  hoverColor?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  color: ${({ color }) => color};
  ${({ hoverColor }) =>
    hoverColor &&
    css`
      :hover {
        background-color: ${hoverColor};
      }
    `}

  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 9px;
  svg {
    margin-right: 6px;
    width: 20px;
    height: 20px;
    path,
    g {
      fill: ${({ color }) => color};
    }
  }
`;

const FileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
