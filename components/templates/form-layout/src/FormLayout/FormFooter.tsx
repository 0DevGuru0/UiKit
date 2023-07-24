import styled from 'styled-components';
import { FormLayoutProps } from '..';
import { Controllers } from './Controllers';

export const controllersHeight = 120;

interface ScrollableContentProps {
  hasInfoSegment: boolean;
  footerHeight?: number;
}

const ControllersWrapper = styled.div<ScrollableContentProps>`
  height: ${({ footerHeight }) => footerHeight ?? controllersHeight}px;
  position: relative;
  padding-left: 3.6rem;
  padding-right: 3.6rem;
  display: flex;
  justify-content: ${({ hasInfoSegment }) =>
    hasInfoSegment ? 'space-between' : 'flex-end'};
  align-items: center;
  box-shadow: 0px -1px 0px #e0e0e0;
`;

type FormFooterProps = Pick<
  FormLayoutProps,
  'infoSegment' | 'isChanged' | 'controllersConfig' | 'footerHeight'
>;

export const FormFooter = (props: FormFooterProps) => {
  const _infoSegment = props.infoSegment ?? null;
  const hasInfoSegment = !!_infoSegment;

  return (
    <ControllersWrapper footerHeight={props.footerHeight} hasInfoSegment={hasInfoSegment}>
      {_infoSegment}
      <Controllers {...props.controllersConfig} />
    </ControllersWrapper>
  );
};
