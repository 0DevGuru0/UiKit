import { MapperConfig } from '.';

export type ObjectData = Record<string, any> | Record<string, any>[];

export type Mapper = (data: any, config?: Record<string, any>) => any;

export type Config =
  | {
      mapperName: 'joinFields';
      config: MapperConfig['joinFields'];
    }
  | {
      mapperName: 'pickFields';
      config: MapperConfig['pickFields'];
    }
  | {
      mapperName: 'renameFields';
      config: MapperConfig['renameFields'];
    }
  | {
      mapperName: 'splitStrings';
      config: MapperConfig['splitStrings'];
    }
  | {
      mapperName: 'identity';
      config?: undefined;
    };
