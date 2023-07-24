import { StoryFC } from '$storybook/StoryFC';

import { Wizard } from './Wizard';
import { WizardProps } from './Wizard/types';
import { Member as MemberSvg, SubGroups as SubGroupsSvg, Save } from '@avidkit/icons';
import { Dropzone } from '@avidkit/dropzone';
import { SummaryCard } from '@avidkit/summary-card';
import { IconsAndLabelsSummary } from '@avidkit/icons-and-labels-summary';
import styled from 'styled-components';
import { StepperIcon } from './AddGroup.stories/StepperIcon';
import { Breadcrumb } from '@avidkit/breadcrumb';
import { Autocomplete } from '@avidkit/autocomplete';

export default {
  title: 'Molecules / Wizard ',
  component: Wizard,
  parameters: { background: { noPadding: true } },
};

export const AddExam: StoryFC<WizardProps> = (args) => {
  return (
    <>
      <span>some text for test</span>
      <Wizard {...args} />
    </>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Container = styled(Column)`
  gap: 20px;
`;

const SummaryItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: 24px;

  & > div {
    flex-basis: 20%;
  }
`;

const tags = [
  'Enghelab',
  'French Language',
  '2 Shifts',
  'Tag 1',
  'Another Tag',
  'Another Tag',
];

const summaryInfo = [
  {
    label: 'Members',
    description: 41,
    icon: <MemberSvg />,
  },
  {
    label: 'SubGroups',
    description: 32,
    icon: <SubGroupsSvg />,
  },
];

const items = ['Recent', 'Resolved', 'Title', 'Task Status'];
AddExam.args = {
  open: true,
  title: 'Add Groups',
  variant: 'lernito',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  sideImage: require('./AddExam.stories/img.png'),
  stepIcon: StepperIcon,
  currentStep: 0,
  fullScreen: true,
  backLabel: 'Back',
  steps: [
    {
      title: 'Select Groups',
      headerButtonProps: {
        label: 'Save',
        color: 'grey',
        variant: 'outline',
        startIcon: <Save />,
        size: 'small',
      },
      children: (
        <Container>
          <Breadcrumb
            threshold={3}
            variant="normal"
            boldLastItem
            items={[
              {
                title: 'All',
              },
              {
                title: 'Tehran',
              },
              {
                title: 'Private Schools',
              },
            ]}
          />
          <Autocomplete
            items={items}
            selectedItems={['Recent']}
            multiSelectable
            searchPlaceholder="Search something ..."
          />
          <SummaryItems>
            {Array.from(Array(20).keys()).map((i, x) => {
              return (
                <SummaryCard
                  title={[
                    {
                      title: 'test 1',
                    },
                  ]}
                  key={x}
                  isSelected={true}
                  summaryInfo={summaryInfo}
                  tags={tags}
                  isTagActivated={false}
                />
              );
            })}
          </SummaryItems>
        </Container>
      ),
    },
    {
      title: 'Selected Groups',
      children: (
        <SummaryItems>
          <SummaryCard
            title={[
              {
                title: 'test 1',
              },
            ]}
            isSelected={true}
            summaryInfo={summaryInfo}
            tags={tags}
            isTagActivated={false}
          />
        </SummaryItems>
      ),
    },
    {
      title: 'Question list',
      children: (
        <Container>
          <Dropzone accept="text/csv" />
          <IconsAndLabelsSummary
            items={[
              {
                label: 'Sections',
                description: 12,
                icon: <MemberSvg />,
              },
              {
                label: 'Questions',
                description: 70,
                icon: <SubGroupsSvg />,
              },
              {
                label: 'Members',
                description: 384,
                icon: <MemberSvg />,
              },
            ]}
            size="md"
            isDescriptionBold
            isIconLarge
          />
        </Container>
      ),
    },
  ],
};
