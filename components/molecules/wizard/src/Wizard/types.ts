import { ElementType } from 'react';
import { ModalProps } from '@avidkit/modal';
import { ButtonProps } from '@avidkit/button';

export interface ISteps {
  title: string;
  children: JSX.Element;
  headerButtonProps?: ButtonProps & { hide?: boolean };
  forwardBtnProps?: ButtonProps & { hide?: boolean };
  cancelBtnProps?: ButtonProps & { hide?: boolean };
  backBtnProps?: ButtonProps & { hide?: boolean };
  description?: WizardProps['description'];
  sideImage?: WizardProps['sideImage'];
  sideTitle?: string;
  sideIcon?: WizardProps['icon'];
}

export interface ContainerProps {
  variant?: 'iknito' | 'lernito';
  $fullScreen?: boolean;
}

export interface WizardProps extends ContainerProps {
  title: string;
  description: string;
  nextLabel?: string;
  backLabel?: string;

  doneLabel?: string;
  cancelLabel?: string;
  additionalButtonLabel?: string;
  side?: JSX.Element;
  sideImage?: string;
  icon?: JSX.Element;
  stepIcon?: ElementType;
  currentStep?: number;
  onNext?: () => void;
  onBack?: () => void;
  onDone?: () => void;
  onCancel?: () => void;
  nextDisabled?: boolean;
  modalProps?: ModalProps;
  doneDisabled?: boolean;
  doneLoading?: boolean;
  nextLoading?: boolean;
  open?: boolean;
  className?: string;
  steps: ISteps[];
  initialLoading?: boolean;
  fullScreen?: boolean;
}
