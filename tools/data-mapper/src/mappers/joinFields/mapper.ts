import { ObjectData } from '../types';
import { getContentWIthVariables } from './mapper/getContentWIthVariables';
import { getVariableKeys } from './mapper/getVariableKeys';
import { JoinFieldsConfig, JoinGroup } from './types';

/**
 *
 * @param data Input data
 * @param config An array of join configs. If field is set, it would join the subfields of that field. If the field is an array, execute join operation of each element.
 * @returns The modified info
 */
export const joinFields = (data: ObjectData, config: JoinFieldsConfig): ObjectData => {
  let result = { ...data };

  for (const joinConfig of config.joinGroups) {
    result = joinWithFormat(result, joinConfig);
  }

  return result;
};

const setVariablesInFormat = (data: Record<string, string>, format: string): string => {
  const targetVariableKeys = getVariableKeys(format);

  return getContentWIthVariables(format, targetVariableKeys, data);
};

const joinWithFormat = (data: ObjectData, config: JoinGroup): ObjectData => {
  if (Array.isArray(data)) {
    return data.map((elem) => ({
      ...elem,
      [config.newFieldName]: setVariablesInFormat(elem, config.format),
    }));
  }

  return {
    ...data,
    [config.newFieldName]: setVariablesInFormat(data, config.format),
  };
};
