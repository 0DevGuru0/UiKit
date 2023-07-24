import styled from 'styled-components';
import { StoryFC } from '$storybook/StoryFC';
import { Dropzone, DropzoneProps } from './Dropzone';
import { FileXls } from '@avidkit/icons';

export default {
  title: 'Molecules / Dropzone',
  component: Dropzone,
};

export const Default: StoryFC<DropzoneProps> = (args) => {
  return <Dropzone {...args} />;
};

Default.args = {
  accept: 'image/jpeg',
  maxFiles: 1,
  progress: 10,
  showPreview: () => console.log('show preview'),
  uploadFileIcon: <FileXls />,
};

export const DropzoneWithoutPauseAndStop: StoryFC<DropzoneProps> = () => {
  return <Dropzone accept="image/jpeg" maxFiles={1} progress={10} />;
};

export const DropzoneShowError: StoryFC<DropzoneProps> = () => {
  return (
    <DropzoneWrapper
      showPreviewLabel="پیش نمایش"
      deleteLabel="حذف"
      accept={[
        'image/jpeg',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.oasis.opendocument.spreadsheet',
        'text/csv',
      ]}
      errorMessage="There is an error with you uploaded file, please check it and upload again"
      maxFiles={2}
      onDelete={() => {
        console.log('deleted ');
      }}
    />
  );
};

const DropzoneWrapper = styled(Dropzone)`
  .AK_FileTitleName {
    color: #000;
  }
  .AK_FileSubTitle {
    color: ${({ theme }) => theme.palette.grey[700]};
  }
`;
