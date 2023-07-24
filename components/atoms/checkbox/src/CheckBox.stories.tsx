import { StoryFC } from '$storybook/StoryFC';
import { useState } from 'react';
import { CheckBox, CheckBoxProps } from './CheckBox';
import { Check } from '@avidkit/icons';
import styled from 'styled-components';

export default {
  title: 'Atoms / CheckBox',
  component: CheckBox,
};

export const Default: StoryFC<CheckBoxProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.isChecked);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return <CheckBox {...args} isChecked={isChecked} onChange={onChange} />;
};
export const CustomCheckbox = Default.bind({});
export const Disabled = Default.bind({});
export const NoLabel = Default.bind({});

const SvgWrapper = styled.div<{ $isChecked: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isChecked }) => ($isChecked ? '#00a693' : '#FFFFFF')};
  border: 1px solid ${({ $isChecked }) => ($isChecked ? '#00a693' : '#a1b1c7')};
  border-radius: 4px;
  width: 18px;
  height: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  &:hover {
    border-color: #00a693;
  }
`;

const StyledCheck = styled(Check)`
  path {
    fill: #ffffff;
  }
`;

const CheckboxComponent = (props: any) => {
  console.log('props: ', props);
  return (
    <SvgWrapper $isChecked={props.isChecked}>
      {props.isChecked && <StyledCheck />}
    </SvgWrapper>
  );
};

Default.args = {
  id: 'simple-checkbox',
  label: 'Label',
  isChecked: false,
};

CustomCheckbox.args = {
  id: 'simple-checkbox',
  label: 'Label',
  isChecked: false,
  checkComponent: CheckboxComponent,
};

Disabled.args = {
  id: 'simple-checkbox',
  label: 'Label',
  disabled: true,
  isChecked: false,
};

NoLabel.args = {
  id: 'simple-checkbox',
  isChecked: false,
};
