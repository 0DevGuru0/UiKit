import { FC } from 'react';

import styled from 'styled-components';
import truncate from 'truncate-middle';

const textOffset = 120;

export interface JournalTitleProps {
  id: string;
  index: number;
  width: number;
  title: string;
  isChecked: boolean;
  isHovered: boolean;
  journalType: string;
  thumbnail?: string;
  onToggle: (selected: boolean, taskKey: string) => void;
}

export const JournalTitle: FC<JournalTitleProps> = ({
  id,
  index,
  title,
  width,
  isChecked,
  thumbnail,
  isHovered,
  journalType,
  onToggle,
}) => {
  const truncatedTitle = truncate(title, 30, 30, '...');
  const handleCheckboxChange = () => onToggle(!isChecked, id);

  return (
    <Container>
      <IndexContainer>
        <Index>{(index + 1).toString().padStart(2, '0')}</Index>
      </IndexContainer>
      <JournalInfoContainer>
        <Cover>
          <DefaultCover
            width={32}
            height={44}
            alt="default cover"
            src={thumbnail ?? '/journal/defaultJournal-Small.png'}
          />
        </Cover>
        <TextContainer onClick={handleCheckboxChange}>
          <Title width={width}>{truncatedTitle}</Title>
          <JournalType>{journalType}</JournalType>
        </TextContainer>
      </JournalInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
  background-color: transparent;
`;

const TextContainer = styled.div`
  display: block;
  margin: auto 0;
`;

const JournalInfoContainer = styled.div`
  display: flex;
  margin: auto 0;
`;

const IndexContainer = styled.div`
  margin: auto 0;
  line-height: 18px;
  margin-right: 12px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface TitleProps {
  width: number;
}

const Title = styled.div<TitleProps>`
  font-size: 16px;
  font-weight: 600;
  max-height: 40px;
  line-height: 20px;
  width: ${({ width }) => `${width - textOffset}px`};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const JournalType = styled.div`
  margin-top: 6px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Index = styled.div`
  width: 28px;
  height: 18px;
  margin-right: 24px;
`;

const Cover = styled.div`
  width: 32px;
  height: 44px;
  border-radius: 4px;
  margin-right: 12px;
  border: solid 1px ${({ theme }) => theme.palette.divider};
`;

const DefaultCover = styled.img`
  width: inherit;
  height: inherit;
`;
