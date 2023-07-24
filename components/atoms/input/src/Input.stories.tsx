import { useState } from 'react';
import styled from 'styled-components';
import { StoryFC } from '$storybook/StoryFC';

import { Input, InputProps } from './Input';

export default {
  title: 'Atoms / Input',
  component: Input,
  parameters: {
    figmaLink: '',
  },
};

export const Default: StoryFC<InputProps> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <StyledInput
      {...args}
      value={value}
      onChange={setValue}
      onKeyDown={(e) => {
        if (e.ctrlKey && e.key === 'Backspace') {
          console.log('You deleted input!');
        }
      }}
    />
  );
};

const StyledInput = styled(Input)`
  width: 500px;
`;

Default.args = {
  value: '',
  label: 'Input',
  placeholder: '',
};

export const TextArea = Default.bind({});
TextArea.args = {
  value: '',
  label: 'Textarea',
  renderInput: 'textarea',
  placeholder: '',
};
