/* eslint-disable sonarjs/cognitive-complexity */
import { FC } from 'react';
import { DetachedDropzoneProps, FileExtensions } from '../types';
import styled, { css } from 'styled-components';
import { Preview, Trash, Play, Pause, Done, DownloadAlt } from '@avidkit/icons';
import { Button } from '@avidkit/button';
import { LinearProgress } from '@mui/material';
import { FileIcon } from './Files/FileIcon';
export const Files: FC<
  Pick<
    DetachedDropzoneProps,
    | 'files'
    | 'onPause'
    | 'onResume'
    | 'onStop'
    | 'stopLabel'
    | 'pauseLabel'
    | 'resumeLabel'
    | 'fileActionButtons'
    | 'isPaused'
    | 'linearProgressProps'
    | 'onDelete'
    | 'deleteLabel'
  >
> = (props) => {
  const {
    files,
    fileActionButtons,
    onPause,
    onResume,
    onStop,
    onDelete,
    deleteLabel,
    pauseLabel,
    resumeLabel,
    stopLabel,
    isPaused,
    linearProgressProps,
  } = props;

  if (files.length === 0) return null;

  return (
    <>
      {files.map((dropFile, index) => {
        const {
          file: { name, size },
          id,
          fileDescription,
          errorMessage,
          progress: fileProgress,
        } = dropFile;
        const extenstion = `.${name.toLowerCase().split('.').pop()}` as FileExtensions;

        const showPause = onPause && onResume && fileProgress !== 100;
        const showStop = onStop && fileProgress !== 100;
        const fileUploaded = fileProgress >= 100;

        return (
          <FilesContainer
            $hasError={!!errorMessage}
            $forceHighlight={fileProgress === 100}
            key={name + index}
            className="avidkit-dropzone-description-file"
          >
            <FileWrapper>
              <FileContainer>
                <FileIcon extenstion={extenstion} />
                <Title className="avidkit-dropzone-description-filename">{name}</Title>
              </FileContainer>
              <Description className="avidkit-dropzone-description-filedata">
                {fileProgress === 100 && <Done />}
                {
                  <Subtitle className="avidkit-description-subtitle">
                    {fileProgress ?? 0}% - {size ?? 0} bytes
                    {fileDescription ? ` - ${fileDescription}` : ''}
                  </Subtitle>
                }
              </Description>
              {errorMessage ?? <ShowErrorMessage>{errorMessage}</ShowErrorMessage>}
            </FileWrapper>

            <ProgressContainer className="avidkit-dropzone-progress">
              <FullProgress
                variant="determinate"
                color="primary"
                value={fileProgress}
                {...linearProgressProps}
              />
              <ButtonsContainer className="avidkit-dropzone-progress-btns">
                {fileUploaded && (
                  <Button
                    size={'small'}
                    startIcon={<Trash />}
                    iconButtonMode
                    variant={'tonal'}
                    label={deleteLabel}
                    color={'error'}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete?.(id);
                    }}
                  />
                )}
                {fileUploaded && (
                  <Button
                    size={'small'}
                    startIcon={<DownloadAlt />}
                    iconButtonMode
                    variant={'tonal'}
                    label={deleteLabel}
                    color={'primary'}
                    onClick={(e) => {
                      e.stopPropagation();
                      const a = document.createElement('a');
                      a.href = window.URL.createObjectURL(dropFile.file);
                      a.download = dropFile.file.name;
                      a.click();
                      a.remove();
                    }}
                  />
                )}
                {showPause && (
                  <Button
                    size={'small'}
                    startIcon={isPaused ? <Play /> : <Pause />}
                    iconButtonMode
                    variant={'tonal'}
                    color={'grey'}
                    label={isPaused ? resumeLabel : pauseLabel}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isPaused) {
                        onResume?.(id);
                      } else {
                        onPause?.(id);
                      }
                    }}
                  />
                )}
                {showStop && (
                  <Button
                    size={'small'}
                    startIcon={<Trash />}
                    iconButtonMode
                    label={stopLabel}
                    variant={'tonal'}
                    color={'grey'}
                    onClick={(e) => {
                      e.stopPropagation();
                      onStop?.(id);
                    }}
                  />
                )}
                {fileActionButtons
                  ?.filter((i) => !i.hide)
                  ?.map((button, ix) => (
                    <Button
                      key={ix}
                      size={'small'}
                      startIcon={<Preview />}
                      iconButtonMode
                      variant={'tonal'}
                      {...button}
                      onClick={(e) => {
                        e.stopPropagation();
                        button.onClick?.(id);
                      }}
                    />
                  ))}
              </ButtonsContainer>
            </ProgressContainer>
          </FilesContainer>
        );
      })}
    </>
  );
};

const highlight = css`
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;

const FilesContainer = styled.div<{ $forceHighlight?: boolean; $hasError?: boolean }>`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.grey[400]};
  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.error[500]};
    `}
  &:hover {
    ${highlight}
  }
`;

const FileWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 12px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const FullProgress = styled(LinearProgress)`
  width: 100%;
  border-radius: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
  width: 100%;
  gap: 12px;
`;

const FileContainer = styled.div`
  display: flex;
  gap: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.grey[900]};
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.grey[700]};
`;

const ShowErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.error[500]};
  margin: 0;
  font-size: 12px;
`;
