import { FilterSelectorMenu } from './FilterSelectorMenu';

export default {
  title: 'Molecules / FilterSelectorMenu',
  component: FilterSelectorMenu,
};

export const Default = (args: any) => <FilterSelectorMenu {...args} />;
Default.args = {
  items: [
    { id: '1', label: 'Gavin Edward' },
    { id: '2', label: 'Dominic Butler' },
    { id: '3', label: 'Nathan Churchill' },
    { id: '4', label: 'Paul Hodges' },
    { id: '5', label: 'William Hunter' },
    { id: '6', label: 'Paul Edward' },
  ],
  multiSelect: false,
};
