import { FilterConfig } from './filterTypes';
import { ToggleItem } from './ToggleSelect';
import { SampleRenderer } from './FilterCard/SampleRenderer';

export const toggleItems: ToggleItem[] = [
  { title: 'Hamid', innerItem: 'https://github.com/hamidfzm.png' },
  { title: 'Ali', innerItem: 'https://github.com/alitourani.png' },
  { title: 'HamidReza', innerItem: 'https://github.com/hrkhosravi.png' },
  { title: 'Sajjad', innerItem: 'https://github.com/afsan007.png' },
  { title: 'Hossein', innerItem: 'https://github.com/HosseinAgha.png' },
  { title: 'Moein' },
];

export const sampleFilterConfig: FilterConfig = {
  inputs: [
    {
      label: 'ISSN',
      name: 'issn',
      multiSelect: false,
      rendererComponent: SampleRenderer,
    },
    {
      label: 'Publisher',
      name: 'publisher',
      multiSelect: true,
      items: ['IEEE', 'SAGE Publishing', 'GEGET'],
    },
  ],
  checkboxes: [
    {
      name: 'language',
      label: 'Language',
      checkboxes: [
        {
          label: 'English',
          name: 'english',
        },
        {
          label: 'Arabic',
          name: 'arabic',
        },
      ],
    },
  ],
};
