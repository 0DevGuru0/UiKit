import { createRef, forwardRef, useCallback, useRef } from 'react';

import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from 'overlayscrollbars-react';
import styled from 'styled-components';
import 'overlayscrollbars/css/OverlayScrollbars.css';

type ScrollbarProps = OverlayScrollbarsComponentProps & {
  shadowsOnOverflow?: boolean;
};

export const Scrollbar = forwardRef(
  (
    { children, shadowsOnOverflow = true, options, ...props }: ScrollbarProps,
    ref: any,
  ) => {
    const topShadowRef = useRef<HTMLDivElement>(null);
    const bottomShadowRef = useRef<HTMLDivElement>(null);

    const internalRef: any = createRef();

    const refSetter = useCallback(
      (scrollbarsRef: OverlayScrollbarsComponent | null) => {
        if (scrollbarsRef) {
          if (ref) {
            ref.current = scrollbarsRef.osInstance()?.getElements().viewport;
          } else if (internalRef) {
            internalRef.current = scrollbarsRef.osInstance()?.getElements().viewport;
          }
        }
      },
      [ref, internalRef],
    );

    const onUpdateScrollbar = (values: any) => {
      const { scrollTop, scrollHeight, clientHeight } = values;

      const bottomScrollTop = scrollHeight - clientHeight;
      const spaceToEnd = bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20);

      if (topShadowRef.current) {
        topShadowRef.current.style.visibility = scrollTop > 0 ? 'visible' : 'hidden';
      }

      if (bottomShadowRef.current) {
        bottomShadowRef.current.style.visibility = spaceToEnd > 0 ? 'visible' : 'hidden';
      }
    };

    const targetRef = ref || internalRef;

    return (
      <Container>
        <OverlayScrollbars
          ref={refSetter}
          options={{
            scrollbars: { autoHide: 'scroll' },
            callbacks: {
              onUpdated: () =>
                targetRef && targetRef.current
                  ? onUpdateScrollbar(targetRef.current)
                  : () => null,
              onScroll: (e: any) => onUpdateScrollbar(e.srcElement),
            },
            ...options,
          }}
          {...props}
        >
          {children}
        </OverlayScrollbars>
        {shadowsOnOverflow && (
          <>
            <TopShadow ref={topShadowRef} />
            <BottomShadow ref={bottomShadowRef} />
          </>
        )}
      </Container>
    );
  },
);

Scrollbar.displayName = 'Scrollbar';

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const OverlayScrollbars = styled(OverlayScrollbarsComponent)`
  height: 100%;
  & > div:nth-child(6) {
    right: 4px;
  }
`;

const TopShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  visibility: hidden;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
`;

const BottomShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  visibility: hidden;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
`;
