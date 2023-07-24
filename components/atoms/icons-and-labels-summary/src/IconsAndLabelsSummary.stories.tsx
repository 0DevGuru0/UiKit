import {
  IconsAndLabelsSummary,
  IconsAndLabelsSummaryProps,
} from './IconsAndLabelsSummary';
import { StoryFC } from '$storybook/StoryFC';
import styled from 'styled-components';
import { MemberAlone as MemberSvg, SubGroups as SubGroupsSvg } from '@avidkit/icons';

export default {
  title: 'Atoms / IconsAndLabelsSummary',
  component: IconsAndLabelsSummary,
  parameters: { background: { noPadding: false } },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
  },
};

export const IconsAndLabelsSummaryCmp: StoryFC<IconsAndLabelsSummaryProps> = (args) => {
  return (
    <Container>
      <IconsAndLabelsSummary {...args} />
    </Container>
  );
};

const StyledMemberSvg = styled(MemberSvg)`
  fill: ${({ theme }) => theme.palette.primary.main};
`;

const RedLabel = styled.span`
  color: red;
`;

IconsAndLabelsSummaryCmp.args = {
  items: [
    {
      label: 'Members',
      description: 41,
      icon: <StyledMemberSvg />,
    },
    {
      label: <RedLabel>Sub Groups</RedLabel>,
      description: 32,
      icon: <SubGroupsSvg />,
    },
    {
      label: 'Individuals',
      description: 46,
      icon: <MemberSvg />,
    },
  ],
  size: 'sm',
  isDescriptionBold: false,
  isIconLarge: false,
};

const Container = styled.div`
  width: 500px;
`;
