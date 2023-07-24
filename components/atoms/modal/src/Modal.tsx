import { ComponentProps } from 'react';
import styled from 'styled-components';
import MuiModal from '@mui/material/Modal';

export type ModalProps = ComponentProps<typeof MuiModal>;

export const Modal = (props: ModalProps) => {
  return (
    <StyledModal
      slots={{
        backdrop: Backdrop,
      }}
      {...props}
    />
  );
};
const StyledModal = styled(MuiModal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  background-color: rgba(115, 130, 151, 0.1);
  -webkit-tap-highlight-color: transparent;
`;
