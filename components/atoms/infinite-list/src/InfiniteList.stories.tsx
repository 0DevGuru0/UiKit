import { ReactElement, useState } from 'react';
import { StoryFC } from '$storybook/StoryFC';
import { InfiniteList, InfiniteListProps } from './InfiniteList';
import styled from 'styled-components';

export default {
  title: 'Atoms / InfiniteList',
  component: InfiniteList,
  parameters: { background: { noPadding: false } },
};

export const PrimaryInfiniteList: StoryFC<InfiniteListProps> = (args) => {
  const [items, setItems] = useState<ReactElement[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const loadNextPage = () => {
    setIsNextPageLoading(true);
    setTimeout(() => {
      setHasNextPage(items.length < 50);
      setIsNextPageLoading(false);
      setItems(
        [...items].concat(
          new Array(10).fill(true).map((_, index) => {
            return <Item key={index}> item_{index}</Item>;
          }),
        ),
      );
    }, 2500);
  };

  const LoadingIndicator = <Loading> Waiting...</Loading>;

  return (
    <InfiniteList
      {...args}
      height={'400px'}
      width={'100%'}
      hasNextPage={hasNextPage}
      isNextPageLoading={isNextPageLoading}
      items={items}
      loadNextPage={loadNextPage}
      hideScroll={true}
      loadingIndicator={LoadingIndicator}
    />
  );
};

const Loading = styled.div`
  color: #111111;
  background-color: #eee8b5;
  border-radius: 2px;
  border: 1px solid #bbb8b8;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  font: 16px;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  color: #000000;
  background-color: #b5eff1;
  border-radius: 2px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  font: 16px;
  justify-content: center;
  align-items: center;
`;

PrimaryInfiniteList.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/SnbTiJnEvWdckzYPTnByqL/Lernito-Exam?node-id=12898%3A1080',
  },
};
