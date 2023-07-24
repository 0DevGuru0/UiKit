import mime from 'mime-types';
import { Accept } from 'react-dropzone';
import { FileExtensions } from './types';

export const getExtensionData = (ext: FileExtensions[]): Accept => {
  const acceptObj: Accept = {};
  ext.forEach((extension) => {
    const cType = mime.lookup(extension);
    if (cType) {
      acceptObj[cType] = [extension];
    }
  });
  return acceptObj;
};
