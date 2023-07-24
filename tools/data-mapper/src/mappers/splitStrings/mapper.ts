import { SplitStringsConfig } from './types';

export const splitStrings = (
  data: string | string[],
  config: SplitStringsConfig,
): string[] | string[][] => {
  if (Array.isArray(data)) {
    return data.map((elem: string) => elem.split(config.separator));
  }

  return data.split(config.separator);
};
