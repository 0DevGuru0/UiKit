import { uniq } from 'lodash';

export const getVariableKeys = (targetMessageContent: string): string[] => {
  const variables = targetMessageContent.matchAll(/{{([^{}]+)}}/g);

  const expectedVariableKeys = Array.from(variables).map((variableArr) => variableArr[1]);

  return uniq(expectedVariableKeys);
};
