import { FC, ReactNode, RefObject, useState } from 'react';

import { ChevronLeft, ChevronRight } from '@avidkit/icons';
import { Menu } from '@avidkit/menu';
import styled from 'styled-components';

import { UserSummary } from '../Sidebar';

export interface ServiceConfigOption {
  label: string;
  onClick?: () => void;
}

export interface Item {
  label: string;
  icon: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}

export interface Props {
  isOpen: boolean;
  onToggle: () => void;
  userData?: UserSummary;
  label?: string;
  ref?: RefObject<any>;
  userItems?: ServiceConfigOption[];
  items?: Item[];
  onSelect?: (option: any) => void;
  onUserClick?: () => void;
  hasFooterDivider?: boolean;
}
export const SidebarFooter: FC<Props> = (props) => {
  const [showPopper, setShowPopper] = useState(false);

  return (
    <>
      {showPopper && props.userItems && (
        <StyledMenu
          size="small"
          $isOpen={props.isOpen}
          selectedItems={[]}
          onChangeSelectedItems={(val) => {
            setShowPopper(false);
            props.onSelect?.(val);
          }}
          items={[props.userItems.map((link) => link.label)]}
        />
      )}
      <ToggleButtonContainer onClick={props.onToggle} $isOpen={props.isOpen}>
        {props.isOpen ? <CollapseButton /> : <OpenSidebar />}
      </ToggleButtonContainer>
      <Container $isOpen={props.isOpen}>
        {props.items?.map((link) => (
          <ItemContainer
            key={link.label}
            $isOpen={props.isOpen}
            href={link.href}
            onClick={link.onClick}
          >
            <ItemInfoContainer title={link.label}>
              <ItemIconWrapper $isOpen={props.isOpen}>{link.icon}</ItemIconWrapper>

              {props.isOpen && (
                <RightContainer>
                  <ItemLabel>{link.label}</ItemLabel>
                </RightContainer>
              )}
            </ItemInfoContainer>
          </ItemContainer>
        ))}
        {(props.onUserClick || props.userItems) && (
          <ItemContainer
            $isOpen={props.isOpen}
            hasDivider={props.hasFooterDivider ?? true}
            onClick={() => {
              if (props.userItems) {
                setShowPopper((v) => !v);
              } else {
                props.onUserClick?.();
              }
            }}
          >
            <ItemInfoContainer title={props.label ?? props.userData?.fullName}>
              <ItemImage src={props.userData?.image} $isOpen={props.isOpen} />

              {props.isOpen && (
                <RightContainer>
                  <ItemLabel>{props.label ?? props.userData?.fullName}</ItemLabel>
                </RightContainer>
              )}
            </ItemInfoContainer>
          </ItemContainer>
        )}
      </Container>
    </>
  );
};

interface SettingIconWrapperProps {
  $isOpen: boolean;
}

const ItemIconWrapper = styled.div<SettingIconWrapperProps>`
  width: 36px;
  height: 36px;
  margin: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  svg {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
  }
`;

const OpenSidebar = styled(ChevronRight)`
  font-size: 24px;
  cursor: pointer;
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[700]};
  }
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    & > div {
      & > svg {
        path,
        use {
          fill: ${({ theme }) => theme.palette.grey[800]};
        }
      }
      & > div {
        color: ${({ theme }) => theme.palette.grey[800]};
      }
    }
    background-color: ${({ theme }) => theme.palette.grey[300]};
  }
`;

const ToggleButtonContainer = styled.div<{
  $isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  min-height: 50px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  margin-left: ${({ $isOpen }) => ($isOpen ? '92%' : '64%')};
  background-color: #f4f4f4;
  cursor: pointer;
  z-index: 1001;
  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
    svg {
      path,
      use {
        fill: ${({ theme }) => theme.palette.grey[800]};
      }
    }
  }
`;

interface ContainerProps {
  $isOpen?: boolean;
  hasDivider?: boolean;
}

const ItemImage = styled.img<ContainerProps>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  margin: 6px ${({ $isOpen }) => ($isOpen ? '12px' : 'unset')} 6px 6px;
`;

const ItemLabel = styled.div`
  font-size: 16px;
  width: 168px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ItemContainer = styled.a<ContainerProps>`
  width: inherit;
  border-top: ${({ hasDivider }) => (hasDivider ? '1px solid #e3ebf7' : 'unset')};
  margin-right: ${({ $isOpen }) => ($isOpen ? '24px' : 'unset')};
  align-self: flex-start;
  overflow: hidden;
  transition: width 300ms ease;
  text-decoration: none;
`;

const Container = styled.div<ContainerProps>`
  width: ${({ $isOpen }) => ($isOpen ? '252px' : '48px')};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
`;

const CollapseButton = styled(ChevronLeft)`
  font-size: 24px;
  cursor: pointer;
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[700]};
  }
`;

const StyledMenu = styled(Menu)<ContainerProps>`
  left: ${({ $isOpen }) => ($isOpen ? '136px' : '67px')};
  bottom: 78px;
  z-index: 1500;
  position: absolute;
  div {
    cursor: pointer;
  }
`;
