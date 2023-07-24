import styled, { css } from 'styled-components';
import { Tag as TagSvg, Close } from '@avidkit/icons';
import { IconWrapper } from '@avidkit/icon-wrapper';

export interface TagsProps {
  tagsLabel?: string;
  noTagsLabel?: string;
  tags: string[];
  isActivated?: boolean;
  className?: string;
  showTags: boolean;
  toggleTags?: (e: React.MouseEvent) => void;
}

export const Tags = (props: TagsProps) => {
  const {
    tagsLabel = 'Tags',
    noTagsLabel = 'No tag',
    tags,
    isActivated,
    className,
    showTags,
    toggleTags,
  } = props;

  const showTagsHandler = () => {
    return tags.map((tag, index) => (
      <span key={`Tag_${index}`}>
        <Tag>{tag}</Tag>
        {index !== tags.length - 1 && <Divider $isActivated={isActivated} />}
      </span>
    ));
  };

  return (
    <>
      <Container
        $isActivated={isActivated}
        $showTags={showTags}
        $allTags={false}
        className={className}
        onClick={toggleTags}
      >
        <Row>
          <Icon>
            <StyledTagSvg $isActivated={isActivated} />
          </Icon>
          <Label $isActivated={isActivated}>{tagsLabel}</Label>
        </Row>
        <Row>
          <TagsContainer>
            {tags?.length > 0 ? showTagsHandler() : <Tag>{noTagsLabel}</Tag>}
          </TagsContainer>
        </Row>
      </Container>

      {showTags && (
        <Container
          $isActivated={isActivated}
          $showTags={showTags}
          $allTags={true}
          className={className}
        >
          <Row>
            <Icon>
              <CloseIcon onClick={toggleTags} />
            </Icon>
            <Label $isActivated={isActivated}>{tagsLabel}</Label>
          </Row>
          <Row>
            <TagsContainer $allTags={true}>{showTagsHandler()}</TagsContainer>
          </Row>
        </Container>
      )}
    </>
  );
};

interface ContainerProps {
  $isActivated?: boolean;
  $showTags: boolean;
  $allTags: boolean;
}

const Container = styled.div<ContainerProps>`
  cursor: pointer;

  ${({ $showTags, $allTags }) =>
    $showTags &&
    $allTags &&
    css`
      width: 90% !important;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 24%);
      border-radius: 6px;
      min-height: 90px;
      margin-top: 0 !important;
      z-index: 3;
      background-color: ${({ theme }) => theme.palette.grey[100]};
      box-shadow: 0px 2px 24px rgba(97, 97, 115, 0.16);
      cursor: default !important;
    `}

  ${({ $isActivated }) =>
    $isActivated &&
    css`
      color: ${({ theme }) => theme.palette.primary.dark};
    `}
  width: 100%;
  margin-top: 12px;
  z-index: 2;
  padding: 12px;
  overflow: hidden;

  &:hover {
    ${({ $showTags, $allTags }) =>
      !$showTags &&
      !$allTags &&
      css`
        background-color: ${({ theme }) => theme.palette.secondary[100]};
        border-radius: 6px;
      `}
  }
`;

const Row = styled.div`
  display: flex;
  min-height: 18px;
`;

const Label = styled.div<{ $isActivated?: boolean }>`
  align-self: center;
  line-height: 14px;
  font-size: 12px;
  white-space: nowrap;
  margin: 0 6px;
  color: ${({ $isActivated, theme }) =>
    $isActivated ? theme.palette.primary.main : theme.palette.secondary.main};
`;

interface TagsContainerProps {
  $allTags?: boolean;
}

const TagsContainer = styled.div<TagsContainerProps>`
  width: 100%;
  padding-left: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  white-space: nowrap;
  align-items: center;
  line-height: 18px;
  margin-top: 6px;

  ${({ $allTags }) =>
    $allTags &&
    css`
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      text-overflow: unset;
    `}
`;

const Tag = styled.span`
  align-items: center;
  margin: 0 6px;
  color: ${({ theme }) => theme.palette.grey[600]};
`;

const Divider = styled.div<{ $isActivated?: boolean }>`
  display: inline-block;
  height: 10px;
  width: 1px;
  background-color: ${({ $isActivated, theme }) =>
    $isActivated ? theme.palette.primary.main : theme.palette.secondary.main};
`;

const Icon = styled(IconWrapper)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const StyledTagSvg = styled(TagSvg)<{ $isActivated?: boolean }>`
  cursor: pointer;
  fill: ${({ $isActivated, theme }) =>
    $isActivated ? theme.palette.primary.main : theme.palette.secondary.main};
`;

const CloseIcon = styled(Close)`
  cursor: pointer;
  path {
    fill: ${({ theme }) => theme.palette.grey[500]};
  }
`;
