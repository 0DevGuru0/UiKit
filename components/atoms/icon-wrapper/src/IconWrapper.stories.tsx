import { StoryFC } from '$storybook/StoryFC';
import { IconWrapper, IconWrapperProps } from './IconWrapper';
import { Tag as TagSvg } from '@avidkit/icons';

export default {
  title: 'Atoms / IconWrapper',
  component: IconWrapper,
  parameters: { background: { noPadding: false } },
};

export const IconWrapperCmp: StoryFC<IconWrapperProps> = (args) => {
  return (
    <IconWrapper {...args}>
      <TagSvg />
    </IconWrapper>
  );
};

IconWrapperCmp.args = {
  disableRotationInRtl: false,
};
