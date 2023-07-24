import { delay } from './delay';

export const delayedRunFunc = async (
  delayInMs: number,
  func: (args?: any) => any,
): Promise<any> => {
  await delay(delayInMs);
  return func();
};
