import { ElementType, FC } from 'react';
import {
  Stepper as MuiStepper,
  Step as MuiStep,
  StepConnector as MuiStepConnector,
  StepLabel as MuiStepLabel,
} from '@mui/material';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import times from 'lodash/times';
import styled, { css } from 'styled-components';
import { StepperIcon } from './StepperIcon';
import { ContainerProps } from './types';

export interface StepperProps extends ContainerProps {
  count: number;
  currentStep: number;
  stepIcon?: ElementType;
}

export const Stepper: FC<StepperProps> = ({ currentStep, count, stepIcon, variant }) => {
  return (
    <Container
      activeStep={currentStep}
      alternativeLabel
      connector={<StepConnector variant={variant} />}
      $variant={variant}
    >
      {times(count).map((s) => (
        <MuiStep key={`s-${s}`}>
          <MuiStepLabel StepIconComponent={stepIcon ?? StepperIcon} />
        </MuiStep>
      ))}
    </Container>
  );
};

const Container = styled(MuiStepper)<{ $variant: ContainerProps['variant'] }>`
  && {
    background-color: transparent;
    ${({ $variant }) =>
      $variant === 'iknito' &&
      css`
        width: 267px;
      `}
    align-self: center;
  }
`;

const StepConnector = styled(MuiStepConnector)<ContainerProps>`
  ${({ theme, variant }) =>
    variant === 'lernito'
      ? css`
          &.${stepConnectorClasses.active} {
            & .${stepConnectorClasses.line} {
              border-color: transparent;
            }
          }
          &.${stepConnectorClasses.completed} {
            & .${stepConnectorClasses.line} {
              border-color: transparent;
            }
          }
          & .${stepConnectorClasses.line} {
            border-color: transparent;
            border-top-width: 1px;
            border-top-style: dashed;
            border-radius: 1px;
          }
        `
      : css`
          &.${stepConnectorClasses.active} {
            & .${stepConnectorClasses.line} {
              border-color: ${theme.palette.primary.main};
            }
          }
          &.${stepConnectorClasses.completed} {
            & .${stepConnectorClasses.line} {
              border-color: ${theme.palette.primary.main};
            }
          }
          & .${stepConnectorClasses.line} {
            border-color: ${theme.palette.grey[500]};
            border-top-width: 1px;
            border-top-style: dashed;
            border-radius: 1px;
          }
        `}
`;
