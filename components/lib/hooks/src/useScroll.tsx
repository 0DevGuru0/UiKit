/* eslint-disable no-redeclare */
import { useState } from 'react';
import { useEventListener, RefElement } from './useEventListener';

const percentageValidator = /^\d+(\.\d+)?%$/;

const initialState = {
  scrolledEnd: false,
  scrolling: false,
  scrolledTop: true,
  hitThreshold: false,
};

interface ReturnType {
  scrolling: boolean;
  scrolledEnd: boolean;
  scrolledTop: boolean;
}

function useScrollHook(
  element: RefElement,
  threshold: number | string,
): ReturnType & {
  hitThreshold: boolean;
};

function useScrollHook(element: RefElement): ReturnType;

function useScrollHook(element: RefElement, threshold?: number | string) {
  const [scroll, setScroll] = useState(initialState);
  const isValidPercentage =
    typeof threshold === 'string' && percentageValidator.test(threshold);

  const handleScroll = (e: any) => {
    const precentageValue = isValidPercentage
      ? e.target.scrollHeight * (Number(threshold.replace('%', '')) / 100)
      : 0;

    const thresholdScale =
      typeof threshold === 'string'
        ? precentageValue
        : e.target.scrollHeight - (threshold ?? 0);

    setScroll({
      ...initialState,
      ...(e.target.scrollTop === 0
        ? { scrolledTop: true }
        : {
            scrolledTop: false,
            ...(e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight
              ? { scrolledEnd: true }
              : { scrolling: true }),
            ...(threshold
              ? {
                  hitThreshold:
                    e.target.scrollTop + e.target.clientHeight >= thresholdScale,
                }
              : {}),
          }),
    });
  };

  useEventListener({
    type: 'scroll',
    listener: handleScroll,
    element,
    options: { passive: false },
  });

  return scroll;
}

/**
 * A hook for useScroll
 * @param {RefElement} element The element containing an scroll
 * @param {number | string} threshold A threshold in pixel (number, e.g. 50) or percentage (string, e.g. '30%')
 */
export const useScroll = useScrollHook;
