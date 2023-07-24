import { ReactElement } from 'react';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled from 'styled-components';

import { FileIcon } from './FileIcon';

dayjs.extend(relativeTime);

export interface DropZoneFile extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

export interface FileProps {
  file: DropZoneFile;
  displayFileData?: boolean;
  errorMessage?: string;
  fileIcon?: ReactElement;
}

export const File = ({
  file: { type, name, size, lastModified },
  displayFileData,
  errorMessage,
  fileIcon,
}: FileProps) => {
  return (
    <Container>
      {fileIcon || <FileIcon type={type} />}
      <Description>
        <Title className="AK_FileTitleName">{name}</Title>
        {displayFileData && (
          <Subtitle className="AK_FileSubTitle">
            {size ?? 0} bytes - {dayjs(lastModified).fromNow()}
          </Subtitle>
        )}
        <ShowErrorMessage>{errorMessage}</ShowErrorMessage>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: fit-content;
    height: fit-content;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.grey[900]};
`;

const Subtitle = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => theme.palette.grey[700]};
`;

const ShowErrorMessage = styled.p`
  color: #db5c5c;
  margin: 0;
  font-size: 10px;
`;
