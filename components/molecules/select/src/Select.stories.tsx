import { Check, Edit } from '@avidkit/icons';
import { StoryFC } from '$storybook/StoryFC';
import styled from 'styled-components';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { ReactNode, useCallback, useState } from 'react';
import {
  ErrorText,
  HelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectProps,
} from './Select';

export default {
  title: 'Molecules / Select',
  component: Select,
  parameters: { background: { noPadding: false } },
};
const MyIcon = styled(Edit)`
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[500]};
  }
`;

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
];
export const SingleSelect: StoryFC<
  SelectProps & { errorText?: string; labelText?: string }
> = (args) => {
  const [selection, setSelection] = useState<string[]>([]);
  const [filled, setFilled] = useState(false);
  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof selection>, child: ReactNode) => {
      const {
        target: { value },
      } = event;
      setSelection(typeof value === 'string' ? value.split(',') : value);
      setFilled(value.length > 0 ? true : false);
    },
    [],
  );
  return (
    <>
      <FormControl fullWidth>
        <InputLabel
          label={args.labelText}
          labelId={'select-label'}
          disabled={args.disabled}
          isOptional={args.optional}
          isFilled={filled}
          variant={'LERNITO'}
        />
        <Select {...args} value={selection} onChange={handleChange} filled={filled}>
          {names.map((name) => (
            <MenuItem disableRipple key={name} value={name}>
              <CustomCheckBox isChecked={selection.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        <HelperText>
          {args.errorText && <ErrorText>{args.errorText}</ErrorText>}
        </HelperText>
      </FormControl>
    </>
  );
};
export const SingleSelectWithIcon = SingleSelect.bind({});
export const SingleSelectWithError = SingleSelect.bind({});
export const MultiSelect = SingleSelect.bind({});

SingleSelect.args = {
  labelText: 'Label',
  optional: false,
  disabled: false,
  multiple: false,
  id: 'select',
  placeHolderText: 'Select an item',
};

SingleSelectWithError.args = {
  optional: false,
  disabled: false,
  multiple: false,
  error: true,
  errorText: 'Error message',
  id: 'select',
  placeHolderText: 'Select an item',
};

SingleSelectWithIcon.args = {
  labelText: 'Label',
  optional: false,
  disabled: false,
  multiple: false,
  startIcon: <MyIcon />,
  id: 'select',
  placeHolderText: 'Select an item',
};

MultiSelect.args = {
  labelText: 'Label',
  optional: false,
  disabled: false,
  multiple: true,
  id: 'select',
  placeHolderText: 'Select an item',
};

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

const CustomCheckBox = (props: any) => {
  return (
    <SvgWrapper $isChecked={props.isChecked}>
      {props.isChecked && <StyledCheck />}
    </SvgWrapper>
  );
};
