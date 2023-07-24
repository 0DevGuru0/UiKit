import { StoryFC } from '$storybook/StoryFC';
import { ImageUpload, ImageUploadProps } from './ImageUpload';
import { Upload } from '@avidkit/icons';

export default {
  title: 'Molecules / ImageUpload',
  component: ImageUpload,
  parameters: { background: { noPadding: false } },
};

const Template: StoryFC<ImageUploadProps> = (args) => {
  return <ImageUpload {...args} />;
};

export const ImageUploadWithImage = Template.bind({});

ImageUploadWithImage.args = {
  handleFile: () => console.log('handleFile'),
  children: (
    <>
      <Upload />
    </>
  ),
};

export const ImageUploadInProgress = Template.bind({});

ImageUploadInProgress.args = {
  progress: 30,
  handleFile: () => console.log('handleFile'),
  children: <>uploading</>,
};

export const ImageUploadWithoutImage = Template.bind({});

ImageUploadWithoutImage.args = {
  progress: 0,
  handleFile: () => console.log('handleFile'),
  children: (
    <>
      <Upload />
    </>
  ),
};
