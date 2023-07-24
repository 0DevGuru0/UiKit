import { RenameFieldsConfig } from './types';
import { omitFields } from '../omitFields';
import { ObjectData } from '../types';
import { isArray } from 'lodash';

export const renameFields = (
  data: ObjectData,
  config: RenameFieldsConfig,
): ObjectData => {
  const isArrayData = isArray(data);
  const targetRemovedFieldNames = config.renameConfigs.map(
    (renameConfig) => renameConfig.currentName,
  );

  const modifiedData = isArrayData
    ? data.map((dt) => omitFields(dt, targetRemovedFieldNames))
    : omitFields(data, targetRemovedFieldNames);

  for (const newName of config.renameConfigs) {
    modifiedData[newName.newName] = data[newName.currentName];
  }

  return modifiedData;
};
