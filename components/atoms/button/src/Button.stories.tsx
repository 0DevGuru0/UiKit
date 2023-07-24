import { StoryFC } from '$storybook/StoryFC';
import { Button, ButtonProps } from './Button';
import styled from 'styled-components';
import { AnimatedDots, Bookmark, TrashFill } from '@avidkit/icons';

export default {
  title: 'Atoms / Button',
  component: Button,
  parameters: { background: { noPadding: true } },
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'] as ButtonProps['size'][],
      control: { type: 'select' },
    },
    variant: {
      options: ['solid', 'tonal', 'outline', 'float', 'text'] as ButtonProps['variant'][],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    largeRadius: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    forceFocusedStyle: {
      control: { type: 'boolean' },
    },
    iconButtonMode: {
      control: { type: 'boolean' },
    },
    color: {
      options: [
        'primary',
        'secondary',
        'error',
        'info',
        'grey',
        'reverse',
      ] as ButtonProps['color'][],
      control: { type: 'select' },
    },
  },
};
export const ButtonDefault: StoryFC<ButtonProps> = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);

ButtonDefault.args = {
  label: 'Click Me!',
  loading: false,
  disabled: false,
  forceFocusedStyle: false,
  iconButtonMode: false,
};
export const ButtonLoading = ButtonDefault.bind({});

ButtonLoading.args = {
  label: 'Click Me!',
  loadingIndicator: <AnimatedDots />,
  loading: true,
  disabled: false,
  forceFocusedStyle: false,
  iconButtonMode: false,
};

export const ButtonIconButton = ButtonDefault.bind({});

ButtonIconButton.args = {
  label: 'Click Me!',
  startIcon: <Bookmark />,
  loading: false,
  disabled: false,
  forceFocusedStyle: false,
  iconButtonMode: true,
};

export const IconRightButton = ButtonDefault.bind({});

IconRightButton.args = {
  label: 'Click Me!',
  startIcon: <TrashFill />,
  loading: false,
  disabled: false,
  forceFocusedStyle: false,
  iconButtonMode: false,
};

const parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/SnbTiJnEvWdckzYPTnByqL/Lernito-Exam?node-id=11882%3A754',
  },
} as const;

ButtonDefault.parameters = parameters;
ButtonLoading.parameters = parameters;
ButtonIconButton.parameters = parameters;
IconRightButton.parameters = parameters;

const Container = styled.div`
  padding: 30px;
  display: flex;
  background-color: darkgrey;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
