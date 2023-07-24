import styled from 'styled-components';
import { Button as AvidKitButton } from '@avidkit/button';

const Button = styled(AvidKitButton)`
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export interface ControllersProps {
  onSubmit?: (values: any) => void;
  onBack?: () => void;
  disabled?: boolean;
  backLabel?: string;
  submitLabel?: string;
  submitLoading?: boolean;
}

export const Controllers = (props: ControllersProps) => {
  return (
    <Wrapper>
      {props.onBack && (
        <Button
          onClick={props.onBack}
          fullWidth
          color="info"
          variant="outline"
          className="AK_FormLayout_BackButton"
          label={props.backLabel ?? 'Back'}
        />
      )}
      {props.onSubmit && (
        <Button
          loading={props.submitLoading ?? false}
          fullWidth
          type="submit"
          variant="solid"
          color="primary"
          className="AK_FormLayout_SubmitButton"
          onClick={props.onSubmit}
          disabled={props.disabled}
          label={props.submitLabel ?? 'Submit'}
        />
      )}
    </Wrapper>
  );
};
