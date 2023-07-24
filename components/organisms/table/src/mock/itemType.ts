import { SimpleTitle } from '../Table/CornerColumn/SimpleTitle';
import { CommonText } from '../Table/InnerTable/CommonText';

export interface ItemType {
  title: {
    id: string;
    title: string;
    index?: number;
    journalType: string;
    isChecked?: boolean;
    selectable?: boolean;
    onToggle?: (newState: boolean, journalId: string) => void;
  };
  printISSN: {
    text: string;
  };
  onlineISSN: {
    text: string;
  };
  publisher: {
    text: string;
  };
  price: {
    text: string;
  };
  license: {
    text: string;
  };
  subjects: {
    text: string;
  };
  languages: {
    text: string;
  };
  jcrQuartile: {
    text: string;
  };
  sjrQuartile: {
    text: string;
  };
}

export const itemTypesDefinitions = [
  { width: '406px', column: 'title', label: 'Title', renderer: SimpleTitle },
  { width: '120px', column: 'printISSN', label: 'Print ISSN', renderer: CommonText },
  { width: '120px', column: 'onlineISSN', label: 'Online ISSN', renderer: CommonText },
  { width: '300px', column: 'publisher', label: 'Publisher', renderer: CommonText },
  { width: '126px', column: 'license', label: 'License', renderer: CommonText },
  { width: '200px', column: 'languages', label: 'Languages', renderer: CommonText },
  { width: '150px', column: 'jcrQuartile', label: 'JCR Quartile', renderer: CommonText },
  { width: '150px', column: 'sjrQuartile', label: 'SJR Quartile', renderer: CommonText },
  { width: '300px', column: 'subjects', label: 'Subjects', renderer: CommonText },
];
