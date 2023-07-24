import styled from 'styled-components';
import { StoryFC } from '$storybook/StoryFC';
import { DetachedDropzone } from './DetachedDropzone';
import { DetachedDropZoneState, DetachedDropzoneProps } from './types';
import { useCallback, useRef, useState } from 'react';

export default {
  title: 'Molecules / DetachedDropzone',
  component: DetachedDropzone,
};

export const Default: StoryFC<DetachedDropzoneProps> = (args) => {
  const intvl = useRef<any>();
  const [paused, setPaused] = useState(false);
  const [files, setFiles] = useState<DetachedDropZoneState[]>([]);

  const onFileAdd: DetachedDropzoneProps['onDrop'] = (acceptedFiles) => {
    const newFiles = [...files];
    acceptedFiles.forEach((file) => {
      const alreadyExists = newFiles.find((f) => f.id === file.name);
      if (alreadyExists) return;
      newFiles.push({
        id: file.name,
        progress: 0,
        fileDescription: 'fileDescription1',
        file,
      });
    });

    setFiles(newFiles);
    acceptedFiles.forEach((file) => {
      onFakeUpload();
    });
  };
  const onPause = (id: string) => {
    clearInterval(intvl.current);
    setPaused(true);
  };
  const onResume = (id: string) => {
    setPaused(false);
    onFakeUpload();
  };
  const onFileDeleted = (id: string) => {
    const newFiles = files.filter((f) => f.id !== id);
    setFiles(newFiles);
  };

  const onFakeUpload = useCallback(() => {
    intvl.current = setInterval(() => {
      setFiles((fs) => {
        return fs.map((f) => {
          if (f.progress >= 100) {
            f.progress = 100;
          } else {
            f.progress = f.progress + 5;
          }
          return f;
        });
      });
    }, 200);
  }, []);

  return (
    <DetachedDropzone
      {...args}
      files={files}
      onDelete={onFileDeleted}
      onDrop={onFileAdd}
      isPaused={paused}
      onPause={onPause}
      onResume={onResume}
      dragRejectText="File type is not supported"
    />
  );
};

Default.args = {
  validExtensions: ['.jpg', '.xls', '.csv'],
  maxFiles: 1,
  files: [],
  fileActionButtons: [
    {
      label: 'View',
      onClick: () => {
        console.log('view');
      },
    },
  ],
};

export const DropzoneWithAdditionalBtns: StoryFC<DetachedDropzoneProps> = () => {
  return (
    <DetachedDropzone
      validExtensions={['.jpg', '.xls', '.csv']}
      maxFiles={2}
      files={[]}
      onDrop={() => {
        console.log('droped ');
      }}
      onDelete={() => {
        console.log('deleted ');
      }}
    />
  );
};

export const DropzoneShowError: StoryFC<DetachedDropzoneProps> = () => {
  return (
    <DropzoneWrapper
      validExtensions={['.jpg', '.xls', '.csv']}
      maxFiles={2}
      files={[
        {
          id: '1',
          file: new File([''], 'file1.jpg'),
          fileDescription: 'fileDescription1',
          errorMessage:
            'There is an error with you uploaded file, please check it and upload again',
          progress: 100,
        },
      ]}
      onDrop={() => {
        console.log('deleted ');
      }}
      onDelete={() => {
        console.log('deleted ');
      }}
    />
  );
};

const DropzoneWrapper = styled(DetachedDropzone)`
  .AK_FileTitleName {
    color: #000;
  }
  .AK_FileSubTitle {
    color: ${({ theme }) => theme.palette.grey[700]};
  }
`;
