import { ReactNode } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { FooterIconLink } from './Footer/FooterIconLink';

const currentYear = dayjs().year();

const copyRightCoverage = currentYear === 2021 ? '2021' : `2021-${currentYear}`;

export interface ClickableItem {
  label: string;
  href?: string;
  onClick?: (args: any) => void;
  icon?: {
    default: ReactNode;
    hover?: ReactNode;
  };
  variant?: 'TROWEB' | 'LERNITO';
}

export interface FooterConfig {
  copyRightLink: string;
  textLinks: ClickableItem[];
  iconLinks: ClickableItem[];
  poweredBy: string;
  academy: string;
}

export interface FooterProps {
  footerConfig: FooterConfig;
  narrowPadding: boolean;
  className?: string;
  variant?: 'TROWEB' | 'LERNITO';
}

export const Footer = ({
  narrowPadding,
  footerConfig,
  className,
  variant = 'TROWEB',
}: FooterProps) => {
  return (
    <MainContainer className={className}>
      <Div narrowPadding={narrowPadding}>
        <CopyRightLink href={footerConfig.copyRightLink} target="_blank">
          <CopyRightText>
            {footerConfig.poweredBy} | © {copyRightCoverage} {footerConfig.academy}.
          </CopyRightText>
        </CopyRightLink>
        <LinkContainer>
          {footerConfig.textLinks.map((link, key) => (
            <ItemLink
              href={link.onClick ? '' : link.href}
              target={link.onClick ? '_parent' : '_blank'}
              key={key}
              variant={variant}
              className="avidkit-footer-itemlink"
              $isLink={link.onClick ? false : true}
              onClick={link.onClick}
            >
              {link.label}
            </ItemLink>
          ))}
          {footerConfig.iconLinks.map((link, key) => (
            <FooterIconLink key={key} {...link} variant={variant} />
          ))}
        </LinkContainer>
      </Div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  font-size: 16px;
  height: 68px;
  z-index: 1000;
`;

const CopyRightLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const CopyRightText = styled.span`
  line-height: 20px;
  color: ${({ theme }) => theme.palette.grey[600]};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.grey[600]};
  }
`;

const LinkContainer = styled.div`
  color: ${({ theme }) => theme.palette.grey[700]};
  display: inline-flex;
  flex-grow: inherit;
  line-height: 20px;
`;

interface ElementProps {
  variant: 'TROWEB' | 'LERNITO';
  $isLink: boolean;
}

const ItemLink = styled.a<ElementProps>`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.grey[700]};
  margin: auto 36px auto 0;
  &:hover {
    color: ${({ theme, variant }) =>
      variant === 'TROWEB' ? theme.palette.info.main : theme.palette.primary.main};
    text-decoration: ${({ $isLink }) => ($isLink ? 'underline' : 'none')};
    & > svg path,
    use {
      fill: ${({ theme }) => theme.palette.grey[600]} !important;
    }
  }
`;

const Div = styled.div<{
  narrowPadding: boolean;
}>`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: ${({ narrowPadding }) => (narrowPadding ? '0 36px' : '0px 36px')};
`;
