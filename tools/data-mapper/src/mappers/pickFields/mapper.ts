import { pick } from 'lodash';
import { ObjectData } from '../types';
import { PickFieldsConfig } from './types';

export const pickFields = (data: ObjectData, config: PickFieldsConfig): ObjectData =>
  pick(data, config.fieldNames);
