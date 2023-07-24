import { FC, ReactElement, useCallback, useState } from 'react';
import { DropZoneFile } from './Dropzone/File';
import { ControlledDropzone } from './ControlledDropzone';

export interface DropzoneProps {
  accept: string | string[];
  maxFiles?: number;
  acceptText?: string;
  acceptableFileText?: string;
  progress?: number;
  dragFileInfo?: ReactElement;
  errorMessage?: string;
  className?: string;
  displayFileData?: boolean;
  onChange?: (files: DropZoneFile[]) => void;
  onStop?: () => void | Promise<void>;
  onResume?: () => void | Promise<void>;
  onPause?: () => void | Promise<void>;
  onDelete?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    fileIndex: number,
  ) => void | Promise<void>;
  showPreview?: (fileIndex: number) => void;
  showPreviewLabel?: string;
  deleteLabel?: string;
  uploadFileIcon?: ReactElement;
}

export const Dropzone: FC<DropzoneProps> = (props) => {
  const [files, setFiles] = useState<DropZoneFile[]>([]);
  const onNewFilesAdded = useCallback(
    (acceptedFiles: DropZoneFile[]) => {
      const newFiles = [...files, ...acceptedFiles];

      setFiles(newFiles);
      if (props.onChange) {
        props.onChange(newFiles);
      }
    },
    [files],
  );
  const onFileDeleted = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    fileIndex: number,
  ) => {
    e.stopPropagation();
    const newFiles = [...files];

    newFiles.splice(fileIndex, 1);
    setFiles(newFiles);

    if (props.onDelete) {
      props.onDelete(e, fileIndex);
    }
  };

  return (
    <ControlledDropzone
      {...props}
      files={files}
      onChange={onNewFilesAdded}
      onDelete={onFileDeleted}
    />
  );
};
