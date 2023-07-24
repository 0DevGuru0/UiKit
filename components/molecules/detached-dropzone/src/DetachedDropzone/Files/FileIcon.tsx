import { FC } from 'react';
import { FileXls, Journal } from '@avidkit/icons';
import { FileExtensions } from '../../types';
import styled from 'styled-components';

export const FileIcon: FC<{
  extenstion: FileExtensions;
}> = ({ extenstion }) => {
  switch (extenstion) {
    case '.csv':
    case '.xlsx':
      return <StyledFileIcon />;
    default:
      return <StyledJournal />;
  }
};

const StyledFileIcon = styled(FileXls)`
  width: 36px;
  height: 36px;
`;

const StyledJournal = styled(Journal)`
  width: 36px;
  height: 36px;
`;
