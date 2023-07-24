import { StoryFC } from '$storybook/StoryFC';
import styled from 'styled-components';

import { ThinFatLayout, ThinFatLayoutProps } from './ThinFatLayout';

export default {
  title: 'Atoms / ThinFatLayout',
  component: ThinFatLayout,
  parameters: { background: { noPadding: true } },
};

const ThinElement = styled((props) => (
  <div {...props}>
    <button>Click here</button>
    <h6>Thin element</h6>
  </div>
))`
  & > button {
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  & > h6 {
    margin-top: 30px;
    text-align: center;
  }
`;

const FatElement = styled((props) => (
  <div {...props}>
    <h1>Fat element</h1>
    {Array(10)
      .fill('')
      .map((_, index) => (
        <p key={index}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      ))}
  </div>
))``;

export const Sample: StoryFC<ThinFatLayoutProps> = ThinFatLayout;
Sample.args = {
  fatElement: FatElement,
  thinElement: ThinElement,
};
