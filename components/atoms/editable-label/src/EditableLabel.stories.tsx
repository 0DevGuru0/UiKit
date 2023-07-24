import { StoryFC } from '$storybook/StoryFC';
import { EditableLabel, EditableLabelProps } from './EditableLabel';

export default {
  title: 'Atoms / EditableLabel',
  component: EditableLabel,
};

export const Editable: StoryFC<EditableLabelProps> = EditableLabel;

Editable.args = {
  defaultValue: 'Editable Label',
};

export const NoValue = Editable.bind({});
NoValue.args = {
  placeholder: 'Add new value',
  editMode: true,
};

export const EditingWithSingleClick = Editable.bind({});
EditingWithSingleClick.args = {
  defaultValue: 'Hello World!',
  typeOfClick: 'singleClick',
};

export const Disabled = Editable.bind({});
Disabled.args = {
  defaultValue: 'Editable Label',
};
Disabled.parameters = {
  actions: { argTypesRegex: '^on(?!Submit)[A-Z].*' },
};
