import { joinFields, JoinFieldsConfig } from './joinFields';
import { pickFields, PickFieldsConfig } from './pickFields';
import { renameFields, RenameFieldsConfig } from './renameFields';
import { splitStrings, SplitStringsConfig } from './splitStrings';
import { identity } from './identity';

import { Mapper } from './types';

export interface MapperConfig {
  joinFields: JoinFieldsConfig;
  pickFields: PickFieldsConfig;
  renameFields: RenameFieldsConfig;
  splitStrings: SplitStringsConfig;
  identity: undefined;
}

export const mappers: Record<keyof MapperConfig, Mapper> = {
  joinFields,
  pickFields,
  renameFields,
  splitStrings,
  identity,
};
