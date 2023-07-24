import { StoryFC } from '$storybook/StoryFC';
import { Modal, ModalProps } from './Modal';
import { Box } from '@mui/material';

export default {
  title: 'Atoms / Modal',
  component: Modal,
  parameters: { background: { noPadding: false } },
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
};

export const ModalCmp: StoryFC<ModalProps> = (args) => {
  return (
    <div>
      <h2>Text under model</h2>
      <Modal {...args}>
        <Box style={style}>
          <h2>Text in a modal</h2>
          <p>Aliquid amet deserunt earum!</p>
        </Box>
      </Modal>
    </div>
  );
};

ModalCmp.args = {
  open: true,
};

const style = {
  width: 400,
  bgColor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};
