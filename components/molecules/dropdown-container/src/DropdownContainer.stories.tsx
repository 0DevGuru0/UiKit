import { useState } from 'react';
import { StoryFC } from '$storybook/StoryFC';
import { DropdownContainer } from './DropdownContainer';
import styled from 'styled-components';

export default {
  title: 'Molecules / DropdownContainer',
  component: DropdownContainer,
  parameters: { background: { noPadding: false } },
};

export const DropdownContainerCmp: StoryFC<any> = (args) => {
  const items = exampleColorsWithColorCode.map((color) => {
    return {
      id: `color_${color.name}`,
      label: color.name,
    };
  });
  const [selectedItemId, setSelectedItem] = useState(items[0].id);
  const selectedItemElement = (
    <Box
      color={
        exampleColorsWithColorCode.find(
          (exampleColor) => exampleColor.id === selectedItemId,
        )?.colorCode!
      }
    />
  );
  return (
    <DropdownContainer
      items={items}
      selectedItemId={selectedItemId}
      selectedItemElement={selectedItemElement}
      onSelect={(id) => setSelectedItem(id)}
    />
  );
};

interface StyledCheckBoxProps {
  color: string;
}

const Box = styled.div<StyledCheckBoxProps>`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 100%;
`;

const exampleColorsWithColorCode = [
  {
    id: 'color_blue',
    name: 'blue',
    colorCode: '#0000ff',
  },
  {
    id: 'color_red',
    name: 'red',
    colorCode: '#ff0000',
  },
  {
    id: 'color_yellow',
    name: 'yellow',
    colorCode: 'yellow',
  },
  {
    id: 'color_orange',
    name: 'orange',
    colorCode: '#ffa500',
  },
  {
    id: 'color_green',
    name: 'green',
    colorCode: '#008000',
  },
];
