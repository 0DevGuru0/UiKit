import { FC } from 'react';

import styled, { css } from 'styled-components';

import { ChildItem } from '../Header';

export interface RoutesProps {
  routes: ChildItem[];
  anchorElement?: FC<any>;
}

export const Routes = ({ routes, anchorElement }: RoutesProps) => {
  const Link = anchorElement ?? (() => <a />);

  return (
    <Wrapper>
      {routes.map((route) => {
        const pathname = window?.location.pathname;
        const isActive =
          (pathname === route.href || pathname?.includes(route.href)) ?? false;
        return (
          <Link href={route.href} key={route.label}>
            <Item $isActive={isActive}>{route.label}</Item>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  height: 100%;
  display: flex;
  a,
  div {
    width: fit-content;
    margin-right: 36px;
  }
`;

interface ItemProps {
  $isActive: boolean;
}

const activeItem = css`
  color: #4362cd;
  font-weight: bold;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 16px;
    background-color: #4362cd;
    bottom: -9px;
    border-radius: 8px;
  }
`;

const Item = styled.div<ItemProps>`
  color: #000;
  cursor: pointer;
  position: relative;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  ${({ $isActive }) => $isActive && activeItem}
`;
