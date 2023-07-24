import { FC, useEffect, useRef } from 'react';

import styled, { css } from 'styled-components';
import { Modal } from '@avidkit/modal';
import { LoaderAnimation, CircleLoading } from '@avidkit/loading';
import { Stepper } from './Wizard/Stepper';
import { WizardProps, ContainerProps } from './Wizard/types';
import { StepHeader } from './Wizard/StepHeader';
import { StepFooter } from './Wizard/StepFooter';
import { below, hideScrollBar } from '@avidkit/styles';

export const Wizard: FC<WizardProps> = ({
  steps = [],
  variant = 'iknito',
  currentStep = 0,
  nextLabel = 'Next',
  doneLabel = 'Done',
  cancelLabel = 'Cancel',
  backLabel = 'Back',
  nextDisabled = false,
  doneDisabled = false,
  initialLoading = false,
  sideImage,
  side,
  title,
  description,
  icon,
  stepIcon,
  fullScreen,
  open,
  className,
  doneLoading,
  nextLoading,
  onNext,
  onDone,
  onCancel,
  modalProps = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [currentStep]);

  const step = steps[currentStep];
  if (!step) return null;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <Modal {...modalProps} open={!!open} className={className}>
      <Container variant={variant} $fullScreen={fullScreen}>
        <Side
          background={step.sideImage ?? sideImage}
          variant={variant}
          className={'avidkit-wizard-side'}
        >
          {side ?? (
            <>
              {(step.sideIcon || icon) && (
                <IconWrapper>{step.sideIcon ?? icon}</IconWrapper>
              )}
              <SideContent variant={variant}>
                <Title className={'avidkit-wizard-title'}>
                  {step.sideTitle ?? title}
                </Title>
                <Description className={'avidkit-wizard-description'}>
                  {step.description ?? description}
                </Description>
              </SideContent>
              <Stepper
                variant={variant}
                stepIcon={stepIcon}
                currentStep={currentStep}
                count={steps.length}
              />
            </>
          )}
        </Side>
        <StepContainer variant={variant} className={'avidkit-wizard-step-container'}>
          <CircleLoading
            loading={initialLoading}
            // eslint-disable-next-line @typescript-eslint/naming-convention
            customLoadingElement={
              <LoaderWrapper>
                <LoaderAnimation />
              </LoaderWrapper>
            }
          >
            <StepContent
              $last={isLastStep}
              ref={ref}
              className={'avidkit-wizard-step-content'}
            >
              <StepHeader
                step={step}
                title={title}
                cancelLabel={cancelLabel}
                onCancel={onCancel}
              />
              {variant === 'lernito' && <Line />}

              {step.children}
            </StepContent>

            <StepFooter
              isLastStep={isLastStep}
              step={step}
              cancelLabel={cancelLabel}
              backLabel={backLabel}
              nextLabel={nextLabel}
              doneLabel={doneLabel}
              doneDisabled={doneDisabled}
              nextDisabled={nextDisabled}
              doneLoading={doneLoading}
              nextLoading={nextLoading}
              onDone={onDone}
              onNext={onNext}
              onCancel={onCancel}
            />
          </CircleLoading>
        </StepContainer>
      </Container>
    </Modal>
  );
};

const Line = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 96px;
  height: 1px;
  right: 0;
  z-index: 11;
  background-color: ${({ theme }) => theme.palette.grey[400]};
  @media ${below.laptop} {
    top: 84px;
  }
  @media ${below.tablet} {
    top: 60px;
  }
`;
const Container = styled.div<ContainerProps>`
  ${({ variant, $fullScreen }) => {
    if ($fullScreen) {
      return css`
        height: 100vh;
        width: 100vw;
      `;
    }
    if (variant === 'lernito') {
      return css`
        height: 90%;
        width: 1280px;
      `;
    } else {
      return css`
        height: 524px;
        min-width: 890px;
        max-width: 1280px;
      `;
    }
  }}
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'iknito' ? 'row' : 'row-reverse')};
  border-radius: ${({ variant }) => (variant === 'iknito' ? '8px' : '12px')};
  overflow: hidden;
  // TODO: get box shadow from theme
  box-shadow: 0 0 24px 0 rgba(193, 205, 221, 0.3);
`;

const Side = styled.div<{ background?: string } & ContainerProps>`
  z-index: 12;
  box-sizing: border-box;
  width: ${({ variant }) => (variant === 'iknito' ? '295px' : '360px')};
  @media ${below.laptop} {
    display: none;
  }
  background-color: ${({ theme, variant }) =>
    variant === 'iknito' && theme.palette.common.white};
  ${({ background }) =>
    background &&
    css`
      background-image: url('${background}');
    `}
  background-size: cover;
  background-position: center;
  padding: ${({ variant }) =>
    variant === 'iknito' ? '48px 48px 10px 48px' : '36px 48px'};
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === 'lernito' ? 'column-reverse' : 'column'};
  align-items: flex-start;
  border-right: 1px solid ${({ theme }) => theme.palette.divider};
  border-left: 1px solid ${({ theme }) => theme.palette.divider};
`;

const StepContainer = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
`;

const SideContent = styled.div<ContainerProps>`
  padding: ${({ variant }) => (variant === 'iknito' ? '10px 0' : '24px 0 0')};
  ${({ variant, theme }) =>
    variant === 'iknito'
      ? css`
          flex: 1;
          color: ${theme.palette.primary.contrastText};
        `
      : css`
          color: ${theme.palette.common.white};
        `}
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.grey[100]};
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.grey[100]};
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const IconWrapper = styled.div`
  margin-bottom: 88px;
  svg {
    width: 48px;
    height: 48px;
    path,
    use {
      fill: ${({ theme }) => theme.palette.grey[400]};
    }
  }
`;

export const StepContent = styled.div<{ $last?: boolean }>`
  ${hideScrollBar};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 36px;
  padding-top: 0;
  @media ${below.laptop} {
    padding: 24px;
    padding-top: 0;
  }
  @media ${below.tablet} {
    padding: 16px;
    padding-top: 0;
  }
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.palette.primary.main};
  background: /* Shadow covers */ linear-gradient(white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    /* Shadows */
      radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0
      100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 24px, 100% 24px, 100% 12px, 100% 12px;
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`;
