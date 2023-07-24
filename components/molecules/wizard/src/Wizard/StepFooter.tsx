import { FC } from 'react';
import { Button } from '@avidkit/button';
import { WizardProps } from './types';
import styled from 'styled-components';
import { below, useMedia } from '@avidkit/styles';

interface StepFooterProps {
  step: WizardProps['steps'][number];
  isLastStep: boolean;
  doneDisabled?: WizardProps['doneDisabled'];
  doneLoading?: WizardProps['doneLoading'];
  nextDisabled?: WizardProps['nextDisabled'];
  nextLoading?: WizardProps['nextLoading'];
  onCancel?: WizardProps['onCancel'];
  onDone?: WizardProps['onDone'];
  onNext?: WizardProps['onNext'];
  onBack?: WizardProps['onBack'];
  backLabel?: WizardProps['backLabel'];
  doneLabel?: WizardProps['doneLabel'];
  nextLabel?: WizardProps['nextLabel'];
  cancelLabel?: WizardProps['cancelLabel'];
}
export const StepFooter: FC<StepFooterProps> = ({
  step,
  onCancel,
  onDone,
  onNext,
  onBack,
  isLastStep,
  backLabel,
  nextLabel,
  cancelLabel,
  doneDisabled,
  doneLabel,
  nextDisabled,
}) => {
  const isMobile = useMedia(below.tablet);
  if (isMobile) {
    return (
      <StepActions>
        <MobileBtnGroup className={'avidkit-wizard-step-actions'}>
          {!step.backBtnProps?.hide && (
            <Button
              label={backLabel}
              variant="text"
              color="grey"
              size="medium"
              onClick={onBack}
              {...step.backBtnProps}
            />
          )}
          {!step.forwardBtnProps?.hide && (
            <Button
              label={isLastStep ? doneLabel : nextLabel}
              color="primary"
              variant="solid"
              size="medium"
              onClick={isLastStep ? onDone : onNext}
              disabled={isLastStep ? doneDisabled : nextDisabled}
              {...step.forwardBtnProps}
            />
          )}
        </MobileBtnGroup>
      </StepActions>
    );
  }

  return (
    <StepActions className={'avidkit-wizard-step-actions'}>
      {!step.backBtnProps?.hide && (
        <Button
          label={backLabel}
          variant="text"
          color="grey"
          size="small"
          onClick={onBack}
          {...step.backBtnProps}
        />
      )}
      <BtnGroup>
        {!step.cancelBtnProps?.hide && (
          <Button
            label={cancelLabel}
            color="primary"
            variant="outline"
            size="small"
            onClick={onCancel}
            {...step.cancelBtnProps}
          />
        )}
        {!step.forwardBtnProps?.hide && (
          <Button
            label={isLastStep ? doneLabel : nextLabel}
            color="primary"
            variant="solid"
            size="small"
            onClick={isLastStep ? onDone : onNext}
            disabled={isLastStep ? doneDisabled : nextDisabled}
            {...step.forwardBtnProps}
          />
        )}
      </BtnGroup>
    </StepActions>
  );
};

const BtnGroup = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MobileBtnGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StepActions = styled.div`
  height: 84px;
  margin: 5px 0 0;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${below.tablet} {
    height: 72px;
    padding: 0 12px;
  }
`;
