import { ReactElement } from 'react';
import { DropzoneOptions } from 'react-dropzone';
import { ButtonProps } from '@avidkit/button';
import { LinearProgressProps } from '@mui/material';

export type FileExtensions =
  | '.zip'
  | '.html'
  | '.xls'
  | '.xlsx'
  | '.word'
  | '.json'
  | '.ods'
  | '.jpg'
  | '.csv';

export interface DetachedDropZoneState {
  id: string;
  progress: number;
  fileDescription?: string;
  errorMessage?: string;
  file: DropZoneFile;
}
export interface DropZoneFile extends File {
  readonly lastModified: number;
  readonly name: string;
}

export interface DetachedDropzoneProps {
  files: DetachedDropZoneState[];
  dragRejectText?: string;
  onDrop: DropzoneOptions['onDrop'];
  reactDropzoneProps?: DropzoneOptions;
  validExtensions: FileExtensions[];
  linearProgressProps?: LinearProgressProps;
  maxFiles?: number;
  acceptableFileText?: string;
  pauseLabel?: string;
  resumeLabel?: string;
  deleteLabel?: string;
  stopLabel?: string;
  dragFileInfo?: ReactElement;
  className?: string;
  isPaused?: boolean;
  fileActionButtons?: (ButtonProps & { onClick: (id: string) => void; hide?: boolean })[];
  onStop?: (id: string) => void | Promise<void>;
  onResume?: (id: string) => void | Promise<void>;
  onPause?: (id: string) => void | Promise<void>;
  onDelete?: (id: string) => void | Promise<void>;
}
// export type DropzoneProps = Omit<ControlledDropzoneProps, 'files' | 'onChange'> & {
//   onChange?: (files: DropZoneFile[]) => void;
// };
