import { StoryFC } from '$storybook/StoryFC';
import { QuotaCard, QuotaCardProps } from './QuotaCard';

export default {
  title: 'Molecules / QuotaCard',
  component: QuotaCard,
  parameters: { background: { noPadding: false } },
};

export const QuotaCardCmp: StoryFC<QuotaCardProps> = (args) => {
  return <QuotaCard {...args} />;
};

QuotaCardCmp.args = {
  masterTitle: 'API Requests',
  secondaryTitle: 'month',
  progress: 65,
  progressTitle: '65%',
  variant: 'SUCCESS',
};
