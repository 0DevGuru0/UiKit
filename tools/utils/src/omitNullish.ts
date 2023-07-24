import isNil from 'lodash/isNil';
import omitBy from 'lodash/omitBy';

export const omitNullish = (arg: any): any => {
  if (Array.isArray(arg)) {
    return arg.filter((item) => !isNil(item));
  } else {
    return omitBy(arg, isNil);
  }
};
