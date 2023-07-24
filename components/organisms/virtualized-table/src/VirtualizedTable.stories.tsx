/* eslint-disable no-console */
import { StoryFC } from '$storybook/StoryFC';
import { useRef, useState } from 'react';
import { VirtualizedTable } from './VirtualizedTable';
import { VirtualizedTableProps } from './VirtualizedTable/Types';
import { columnConfig, data } from './fakeData';
import styled from 'styled-components';
import { delayedRunFunc } from '@avidkit/utils';

export default {
  title: 'Organisms / VirtualizedTable',
  component: VirtualizedTable,
};

interface TableDataOne {
  index: number;
  bgColor: string;
  name: string;
  initials: string;
  jobTitle: string;
  description: string;
  longText: string;
}
export const Default: StoryFC<VirtualizedTableProps<TableDataOne>> = (args) => {
  const firstPortionOfData = data.slice(0, 40);
  const [loadedData, setLoadedData] = useState(firstPortionOfData);
  const [isLoadingNewItems, setIsLoadingNewItems] = useState(false);
  const virtusoRef = useRef<any>(null);

  const handleLoadMore = async () => {
    setIsLoadingNewItems(true);
    await delayedRunFunc(3000, () => {
      setLoadedData([
        ...loadedData,
        ...data.slice(loadedData.length, loadedData.length + 50),
      ]);
    });
    setIsLoadingNewItems(false);
  };

  return (
    <>
      <StyledVirtualizedTable
        height={400}
        hover={true}
        virtusoRef={virtusoRef}
        isLoadingBody={false}
        bodyLoadingIndicator={<LoadingIndicator>initiliazing...</LoadingIndicator>}
        isLoadingNewItems={isLoadingNewItems}
        customLoadingIndicator={'Loading...'}
        followOutput={true}
        isFirstColumnFixed={true}
        fixedHeader={true}
        endReached={() => {
          handleLoadMore();
        }}
        onHeaderClick={(columnKey, index) => {
          console.log(columnKey, index);
        }}
        onCellClick={(columnKey, index, props) => {
          console.log(columnKey, index, props);
        }}
        {...args}
      />
      <Button
        style={{ marginTop: '30px' }}
        onClick={() => {
          virtusoRef.current.scrollToIndex(20);
        }}
      >
        click to jump
      </Button>
    </>
  );
};

Default.args = {
  hover: true,
  data,
  config: columnConfig,
};

export const WithIcon = Default.bind({});
WithIcon.args = {
  ...Default.args,
  data: [],
  noItemsIndicator: <div>no items</div>,
};

const StyledVirtualizedTable = styled(VirtualizedTable)`
  & .avidkit-tablebody {
    background-color: blue !important;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
`;

const LoadingIndicator = styled.tbody`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 12px;
  font-weight: bold;
`;
