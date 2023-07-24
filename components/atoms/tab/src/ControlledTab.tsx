import { Tabs, Tab as MuiTab } from '@mui/material';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { GeneralTabProps } from './Tab';

export type ControlledTabProps = GeneralTabProps & { tabIndex: number };
export const ControlledTab: FC<ControlledTabProps> = ({
  className,
  items,
  muiTabsProps,
  onChange,
  tabIndex,
}) => {
  return (
    <Container>
      <StyledTabs
        value={tabIndex}
        onChange={onChange}
        className={className}
        {...muiTabsProps}
      >
        {items.map((item, index) => (
          <StyledMuiTab
            key={index + item.label}
            label={item.label}
            disabled={item.disabled}
            disableFocusRipple
            disableRipple
            {...item.muiTabProps}
          />
        ))}
      </StyledTabs>
      <Content>{items[tabIndex].content}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledTabs = styled(Tabs)`
  ${({ theme }) => css`
    &.MuiTabs-root {
      border-bottom: 1px solid ${theme.palette.primary[200]};
    }
    & .MuiTabs-indicator {
      height: 4px !important;
    }
  `}
`;

const StyledMuiTab = styled(MuiTab)`
  &.MuiButtonBase-root {
    margin-right: 15px;
    margin-left: 15px;
    text-transform: unset;
  }
  &.MuiButtonBase-root.Mui-selected {
    font-weight: 700 !important;
  }
`;
