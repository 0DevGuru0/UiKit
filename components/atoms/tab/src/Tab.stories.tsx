import styled from 'styled-components';
import { Tab } from './Tab';

export default {
  title: 'Atoms / Tab',
  component: Tab,
  parameters: {
    background: { noPadding: true },
  },
};

export const TabComponent = () => {
  const items = [
    {
      label: 'Item Zero',
      content: <Filler color="white" />,
    },
    {
      label: 'Item One',
      content: <Filler color="blue" />,
    },
    {
      label: 'Item Two',
      content: <Filler color="red" />,
    },
    {
      label: 'Item Three',
      content: 'sample text',
    },
  ];
  return <Tab items={items} />;
};

interface FillerProps {
  color: string;
}

const Filler = styled.div<FillerProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;
