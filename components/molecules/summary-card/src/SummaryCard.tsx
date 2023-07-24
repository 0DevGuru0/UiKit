import { FC, MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { CheckBox } from '@avidkit/checkbox';
import { IconsAndLabelsSummary } from '@avidkit/icons-and-labels-summary';
import { Breadcrumb, BreadcrumbStep } from '@avidkit/breadcrumb';
import { SeparatorVariants } from '@avidkit/breadcrumb/src/Breadcrumb/Separator';
import { Tags } from './Tags/Tags';
import { MoreOptions, MoreOptionsProps } from '@avidkit/more-options';

export interface SummaryCardProps {
  title: string | BreadcrumbStep[];
  summaryInfo?: {
    icon: ReactElement;
    label: string | ReactElement;
    description: string | number;
  }[];
  tags?: string[];
  tagsLabel?: string;
  noTagsLabel?: string;
  isSelected?: boolean;
  sections?: MoreOptionsProps['sections'];
  isTagActivated?: boolean;
  isDescriptionBold?: boolean;
  breadcrumbConfig?: {
    separator?: SeparatorVariants;
    threshold?: number;
  };
  onSelect?: MouseEventHandler;
  onClick?: MouseEventHandler;
}

export const SummaryCard: FC<SummaryCardProps> = (props) => {
  const {
    title,
    summaryInfo,
    tagsLabel,
    noTagsLabel,
    tags,
    isSelected,
    isTagActivated,
    isDescriptionBold = true,
    sections,
    breadcrumbConfig,
    onSelect,
    onClick,
  } = props;

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const [orderedTags, setOrderedTags] = useState<string[]>(tags ?? []);
  const [showTags, setShowTags] = useState<boolean>(false);

  useEffect(() => {
    if (isRtl && tags) {
      setOrderedTags([...tags]?.reverse());
    }
  }, [tags, isRtl]);

  const toggleTagsHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tags?.length) {
      setShowTags(!showTags);
    }
  };

  return (
    <Container isSelected={isSelected} onClick={onClick} $focus={showTags}>
      <Header>
        <Selection>
          {onSelect && (
            <CheckBox id={'CheckBox'} isChecked={isSelected} onChange={onSelect} />
          )}
          {Array.isArray(title) ? (
            <StyledBreadcrumb
              items={title}
              variant="small"
              boldLastItem={true}
              threshold={breadcrumbConfig?.threshold}
              separator={breadcrumbConfig?.separator}
            />
          ) : (
            <Title>{title}</Title>
          )}
        </Selection>
        {sections && (
          <OptionsContainer>
            <StyledMoreOption variant="horizontal" sections={sections} />
          </OptionsContainer>
        )}
      </Header>
      {summaryInfo && (
        <IconsAndLabelsSummary
          items={summaryInfo}
          isDescriptionBold={isDescriptionBold}
        />
      )}
      {tags && (
        <Tags
          tags={orderedTags}
          tagsLabel={tagsLabel}
          noTagsLabel={noTagsLabel}
          isActivated={isTagActivated}
          showTags={showTags}
          toggleTags={toggleTagsHandler}
        />
      )}
    </Container>
  );
};

const StyledMoreOption = styled(MoreOptions)`
  a {
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary[100]} !important;
    }
  }
`;

interface StyledProps {
  isSelected?: boolean;
  $focus?: boolean;
}

const Container = styled.div<StyledProps>`
  cursor: pointer;
  width: 268px;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: ${({ isSelected, theme }) =>
    `1px solid ${isSelected ? theme.palette.primary.dark : theme.palette.grey[300]}`};

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.primary[300]};
  }

  ${({ $focus }) =>
    $focus &&
    css`
      outline: 2px solid ${({ theme }) => theme.palette.primary[200]} !important;
    `}
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 24px;
  min-height: 60px;
`;

const Selection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-left: 12px;
  line-height: 17px;
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  width: 200px;
  padding-left: 10px;
  overflow: hidden;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
