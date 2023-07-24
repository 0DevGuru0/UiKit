import { mappers } from './mappers';
import { Config } from './mappers/types';

export const dataMapper = <T extends any, K extends any>(
  data: T,
  mapping: Config | Config[],
): K => {
  if (Array.isArray(mapping)) {
    return mapping.reduce(
      (dt, { mapperName, config }) => mappers[mapperName](dt, config),
      data,
    );
  }

  return mappers[mapping.mapperName](data, mapping.config);
};
