import { Search, SearchProps } from './Search';
import { StoryFC } from '$storybook/StoryFC';

export default {
  title: 'Molecules / Search',
  component: Search,
  argsTypes: { onChange: { action: 'onChange' } },
};

export const SearchCmp: StoryFC<SearchProps> = (args) => (
  <Search {...args} onChange={(val) => args.onChange(val)} />
);

SearchCmp.args = {
  placeholder: 'search',
  startAdornment: true,
};
