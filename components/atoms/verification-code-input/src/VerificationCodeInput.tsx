import { useRef, useState } from 'react';
import styled from 'styled-components';

export interface VerificationCodeInputProps {
  length?: number;
  loading?: boolean;
  className?: string;
  onComplete: (args?: any) => void;
  onChange?: (args?: any) => void;
}

export const VerificationCodeInput = (props: VerificationCodeInputProps) => {
  const { length = 4, loading, className, onComplete, onChange } = props;

  /* States */
  const [codeNumbers, setCodeNumbers] = useState([...Array(length)]);

  const activeIndex = codeNumbers.reduce((prev, number, index) => {
    if (number) {
      return index !== length - 1 ? index + 1 : index;
    } else return prev;
  }, 0);

  /* Hooks */
  const inputsRef = useRef<HTMLInputElement[]>([]);

  /* Handlers */
  const processInput = (e: any, slot: number) => {
    const number = e.target.value;

    const newCode = [...codeNumbers];
    newCode[slot] = number;
    setCodeNumbers(newCode);

    if (slot !== length - 1) {
      inputsRef.current[slot + 1].focus();
    }

    if (onChange) onChange(newCode.join(''));
    if (newCode.every((num) => num)) {
      onComplete(newCode.join(''));
    }
  };

  const onKeyUp = (e: any, slot: number) => {
    if (e.keyCode === 8 && !codeNumbers[slot] && slot !== 0) {
      const newCode = [...codeNumbers];
      newCode[slot - 1] = '';
      setCodeNumbers(newCode);
      inputsRef.current[slot - 1].focus();
      if (onChange) onChange(newCode.join(''));
    }
  };

  return (
    <Container className={className}>
      {codeNumbers.map((number, index) => (
        <StyledInput
          $length={length}
          $active={index === activeIndex}
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={number}
          autoFocus={codeNumbers[0] && index === 0}
          readOnly={index !== activeIndex || loading}
          ref={(ref) => inputsRef.current.push(ref!)}
          onChange={(e) => processInput(e, index)}
          onKeyUp={(e) => onKeyUp(e, index)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div``;

const StyledInput = styled.input<{ $length: number; $active?: boolean }>`
  width: ${({ $length }) => `calc((100% / ${$length}) - 8px)`};
  height: 60px;
  margin: 0 4px;
  border: none;
  border-bottom: ${({ $active, theme }) =>
    `2px solid ${$active ? theme.palette.primary.main : theme.palette.grey[600]}`};
  text-align: center;
  outline: none;
`;
