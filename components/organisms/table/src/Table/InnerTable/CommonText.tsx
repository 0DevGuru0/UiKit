import { FC, useState } from 'react';

import LinesEllipsis from 'react-lines-ellipsis';
import styled from 'styled-components';

import { Tooltip } from '@avidkit/tooltip';

export enum TextType {
  NormalDark = 'NormalDark',
  NormalLight = 'NormalLight',
  SmallDark = 'SmallDark',
}

export interface TextRendererProps {
  textType: TextType;
  text: string;
}

export const CommonText: FC<TextRendererProps> = ({ text, textType }) => {
  const [isClamped, setIsClamped] = useState(false);

  const handleReflow = ({ clamped }: { clamped: boolean }) => {
    setIsClamped(clamped);
  };

  const textElement = (
    <StyledText
      text={text}
      maxLine="2"
      $textType={textType}
      basedOn="letters"
      onReflow={handleReflow}
    />
  );

  if (text) {
    return isClamped ? (
      <Tooltip title={text} arial-label={text}>
        {textElement}
      </Tooltip>
    ) : (
      textElement
    );
  }

  return <EmptyStyledCell>-</EmptyStyledCell>;
};

interface StyledTextProps {
  $textType: TextType;
}

const StyledText = styled(LinesEllipsis)<StyledTextProps>`
  line-height: 20px;
  font-weight: 400;
  font-size: ${({ $textType }) => ($textType === TextType.SmallDark ? '14px' : '16px')};
  color: ${({ theme, $textType }) =>
    $textType === TextType.NormalLight
      ? theme.palette.text.secondary
      : theme.palette.text.primary};
`;

const EmptyStyledCell = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 16px;
`;
