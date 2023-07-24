import { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { UploadZone } from './DetachedDropzone/UploadZone';
import { DetachedDropzoneProps } from './types';
import { Files } from './DetachedDropzone/Files';
import { getExtensionData } from './getExtensionData';

export const DetachedDropzone: FC<DetachedDropzoneProps> = ({
  stopLabel = 'Stop',
  pauseLabel = 'Pause',
  resumeLabel = 'Resume',
  ...props
}) => {
  const {
    files,
    maxFiles = 1,
    validExtensions,
    acceptableFileText,
    onDrop,
    dragFileInfo = (
      <>
        Drag your file here or <Browse>browse</Browse>
      </>
    ),
    onPause,
    onResume,
    onStop,
    onDelete,
    isPaused,
    className,
    reactDropzoneProps,
    linearProgressProps,
    fileActionButtons,
    dragRejectText = 'File type not accepted',
  } = props;

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    maxFiles,
    accept: getExtensionData(validExtensions),
    onDrop,
    ...reactDropzoneProps,
  });

  const maxFilesReached = files?.length >= maxFiles;

  return (
    <Container {...getRootProps()} className={className} aria-label="drag and drop area">
      <input {...getInputProps()} />
      {!maxFilesReached && (
        <UploadZone
          dragFileInfo={dragFileInfo}
          acceptableFileText={acceptableFileText}
          validExtensions={validExtensions}
          isDragReject={isDragReject}
          dragRejectText={dragRejectText}
        />
      )}
      <Files
        files={files}
        stopLabel={stopLabel}
        pauseLabel={pauseLabel}
        resumeLabel={resumeLabel}
        fileActionButtons={fileActionButtons}
        linearProgressProps={linearProgressProps}
        onPause={onPause}
        onStop={onStop}
        onResume={onResume}
        onDelete={onDelete}
        isPaused={isPaused}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  gap: 12px;
`;

const Browse = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;
