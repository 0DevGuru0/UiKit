import { Fragment } from 'react';

import { VirtuosoGrid } from 'react-virtuoso';
import { StoryFC } from '$storybook/StoryFC';
import { Scrollbar } from './Scrollbar';
import styled from 'styled-components';

export default {
  title: 'Atoms / Scrollbar',
  component: Scrollbar,
  parameters: { background: { noPadding: false } },
};

const Container = styled.div`
  height: 400px;
  border-radius: 8px;
  border: 1px solid black;
`;

const ItemContainer = styled.div`
  margin: 12px;
`;

export const WithVirtuoso: StoryFC<typeof Scrollbar> = () => {
  return (
    <Container>
      <VirtuosoGrid
        components={{
          Item: ItemContainer,
          Scroller: Scrollbar as any,
        }}
        style={{ height: '400px' }}
        totalCount={200}
        itemContent={(index) => <div>Item {index}</div>}
      />
    </Container>
  );
};

export const Normal: StoryFC<typeof Scrollbar> = (args) => {
  return (
    <Container style={{ height: '100%' }}>
      <Scrollbar {...args}>
        {[...Array(50)].map((_, idx) => (
          <Fragment key={idx}>
            <p>Sample paragraph {idx + 1}</p>
          </Fragment>
        ))}
      </Scrollbar>
    </Container>
  );
};
