import { FC } from 'react';
import styled, { css } from 'styled-components';
import { OptionItem, OptionItemProps } from './Options/OptionItem';
import { rgba } from 'polished';
import flatten from 'lodash/flatten';

export interface OptionsProps extends Pick<OptionItemProps, 'optionRenderer'> {
  header?: string;
  className?: string;
  hasChevron?: boolean;
  sections: OptionItemProps[][];
}

export const Options: FC<OptionsProps> = ({
  header,
  hasChevron,
  className,
  sections,
  optionRenderer,
}) => {
  const length = sections.length;

  return (
    <Container className={className} $hasChevron={hasChevron}>
      {header && <HeaderText>{header}</HeaderText>}
      {flatten(
        sections.map((moreActions, index: number) => {
          return [
            <Section key={index}>
              {moreActions.map((act, key) => (
                <OptionItem key={key} {...act} optionRenderer={optionRenderer} />
              ))}
            </Section>,
            index + 1 !== length ? <Divider /> : undefined,
          ];
        }),
      )}
    </Container>
  );
};

interface ContainerProps {
  $hasChevron?: boolean;
}

const Container = styled.div<ContainerProps>`
  z-index: 2;
  min-width: 140px;
  position: inherit;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  box-shadow: 0 6px 20px 0 ${({ theme }) => rgba(theme.palette.grey[800], 0.15)};
  ${({ theme, $hasChevron }) =>
    $hasChevron &&
    css`
      &:before {
        width: 0;
        left: 50%;
        height: 0;
        clear: both;
        content: '';
        bottom: 100%;
        position: absolute;
        transform: translateX(-50%);
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 9px solid ${theme.palette.grey[200]};
      }
    `}
`;

const HeaderText = styled.div`
  margin: 6px;
  padding: 6px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.grey[700]};
`;

const Divider = styled.hr`
  height: 1px;
  margin: 0 6px;
  color: ${({ theme }) => theme.palette.grey[300]};
  background-color: ${({ theme }) => theme.palette.grey[300]};
  border: none;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px;
`;
