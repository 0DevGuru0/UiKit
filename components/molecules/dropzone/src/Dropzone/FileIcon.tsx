import { FC } from 'react';

import { FileXls, Journal } from '@avidkit/icons';

export interface FileIconProps {
  type: string;
}

export const FileIcon: FC<FileIconProps> = ({ type }) => {
  switch (type) {
    case 'text/csv':
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
    case 'application/vnd.oasis.opendocument.spreadsheet':
      return <FileXls />;
    default:
      return <Journal />;
  }
};
