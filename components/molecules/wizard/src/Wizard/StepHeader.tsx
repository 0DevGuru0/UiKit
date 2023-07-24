import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@avidkit/button';
import { below, useMedia } from '@avidkit/styles';
import { Close } from '@avidkit/icons';
import { WizardProps } from './types';

export interface StepHeaderProps {
  title: WizardProps['title'];
  cancelLabel: WizardProps['cancelLabel'];
  onCancel?: WizardProps['onCancel'];
  step: WizardProps['steps'][number];
}

export const StepHeader: FC<StepHeaderProps> = (props) => {
  const { title, cancelLabel, onCancel, step } = props;
  const isMobile = useMedia(below.tablet);
  const showHeaderBtn = !step.headerButtonProps?.hide;
  const showCancelBtn = isMobile && !step.cancelBtnProps?.hide;

  return (
    <TitleContainer $showHeaderButton={!!step.headerButtonProps}>
      <Title>{step.title ?? title}</Title>
      <ButtonsContainer>
        {showHeaderBtn && (
          <Button
            label={'header button'}
            {...step.headerButtonProps}
            iconButtonMode={isMobile}
          />
        )}
        {showCancelBtn && (
          <Button
            iconButtonMode
            label={cancelLabel}
            onClick={onCancel}
            startIcon={<Close />}
            variant={'float'}
            color={'grey'}
            size={'small'}
            {...step.cancelBtnProps}
          />
        )}
      </ButtonsContainer>
    </TitleContainer>
  );
};

const TitleContainer = styled.title<{ $showHeaderButton?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 36px;
  padding-bottom: 24px;
  @media ${below.laptop} {
    padding-top: 24px;
  }
  @media ${below.tablet} {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  background-color: ${({ theme }) => theme.palette.grey[100]};
  @media ${below.tablet} {
    padding-bottom: 12px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  @media ${below.laptop} {
    font-size: 20px;
  }
  @media ${below.tablet} {
    font-size: 18px;
  }
  color: ${({ theme }) => theme.palette.grey[900]};
  font-weight: bold;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-direction: row;
`;
