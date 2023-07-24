import { ReactNode } from 'react';
import styled from 'styled-components';
import { Scrollbar } from '@avidkit/scrollbar';
import { ControllersProps } from './FormLayout/Controllers';
import { FormFooter } from './FormLayout/FormFooter';

const ChildrenWrapper = styled.div`
  padding-left: 3.6rem;
  padding-right: 3.6rem;
`;

interface ScrollableContentProps {
  headerExists: boolean;
  controllerExists: boolean;
  headerHeight: number;
}

const ScrollableContent = styled.div<ScrollableContentProps>`
  flex: 1;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export interface FormLayoutProps {
  children?: ReactNode;
  isChanged: boolean;
  infoSegment?: JSX.Element;
  controllersConfig: ControllersProps;
  hasHeaderConfig?: boolean;
  headerHeight: number;
  footerHeight?: number;
  className?: string;
}

export const FormLayout = (props: FormLayoutProps) => {
  const { infoSegment, footerHeight, isChanged, controllersConfig, className } = props;
  return (
    <Container className={className}>
      <ScrollableContent
        headerExists={!!props.hasHeaderConfig}
        controllerExists={props.isChanged}
        headerHeight={props.headerHeight}
      >
        <Scrollbar options={{ scrollbars: { autoHide: 'scroll' } }}>
          <ChildrenWrapper className="AK_ChildrenWrapper">
            {props.children}
          </ChildrenWrapper>
        </Scrollbar>
      </ScrollableContent>
      {isChanged && (
        <FormFooter
          isChanged={isChanged}
          controllersConfig={controllersConfig}
          footerHeight={footerHeight}
          infoSegment={infoSegment}
        />
      )}
    </Container>
  );
};
