import { Fragment } from 'react';
import { StoryFC } from '$storybook/StoryFC';
import { FormLayout, FormLayoutProps } from './FormLayout';
import { Typography } from '@mui/material';
import styled from 'styled-components';

export default {
  title: 'Templates / FormLayout',
  component: FormLayout,
  parameters: { background: { noPadding: true } },
  argTypes: {
    infoSegment: {
      options: [null, 'infoSegment'],
      control: { type: 'radio' },
    },
  },
};

export const Default: StoryFC<FormLayoutProps> = (args) => {
  return <FormLayout {...args}>{args.children}</FormLayout>;
};

const children = Array.from({ length: 50 }, (_, idx) => (
  <Fragment key={idx}>
    <p>paragraph {idx}</p>
  </Fragment>
));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  textTransform: 'unset',
}));

const infoSegment = (
  <div>
    <Typography variant="h6">You have not submitted field yet</Typography>
    <Subtitle variant="subtitle1">
      You may loose these local changes if you leave without submission
    </Subtitle>
  </div>
);

Default.args = {
  isChanged: true,
  hasHeaderConfig: false,
  headerHeight: 11.4,
  controllersConfig: {
    onBack: () => null,
    onSubmit: () => null,
  },
  infoSegment,
  children,
};
