import { useState } from 'react';

import { StoryFC } from '$storybook/StoryFC';

import { Wizard } from './Wizard';
import { WizardProps } from './Wizard/types';
import { Download } from '@avidkit/icons';
import styled from 'styled-components';

export default {
  title: 'Molecules / Wizard ',
  component: Wizard,
  parameters: { background: { noPadding: true } },
};

export const Default: StoryFC<WizardProps> = (args) => {
  const [step, setStep] = useState<number>(0);

  const onPrev = () => setStep((s: number) => s - 1);
  const onNext = () => setStep((s: number) => s + 1);

  return (
    <>
      <span>some text for test</span>
      <StyledWizard {...args} currentStep={step} onCancel={onPrev} onNext={onNext} />
    </>
  );
};

Default.args = {
  open: true,
  title: 'Create Group',
  description:
    'Enter the name for the group you want, and then restrict it to a publisher if you wish.',
  icon: <Download />,
  currentStep: 0,
  nextDisabled: false,
  doneDisabled: false,
  additionalButtonLabel: 'Add another item',
  backLabel: 'Back',

  steps: [
    {
      title: '1. Step 1 title',
      children: <div>Step 1 content</div>,
    },
    {
      title: '2. Step 2 title',
      children: <div>Step 2 content</div>,
    },
    {
      title: '3. Step 3 title',
      children: <div>Step 2 content</div>,
    },
  ],
};

const StyledWizard = styled(Wizard)`
  & .avidkit-wizard-title {
    color: ${({ theme }) => theme.palette.grey[800]};
  }

  & .avidkit-wizard-description {
    color: ${({ theme }) => theme.palette.grey[600]};
  }
`;
