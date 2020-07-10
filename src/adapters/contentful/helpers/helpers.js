import _ from 'lodash';

export const isContentfulObject = (obj) => {
  return typeof obj === 'object' && _.has(obj, 'sys') && _.has(obj, 'fields');
};

export const isEntry = (obj) => {
  return isContentfulObject(obj) && _.has(obj, 'sys.type') && obj.sys.type === 'Entry';
};

export const isAsset = (obj) => {
  return isContentfulObject(obj) && _.has(obj, 'sys.type') && obj.sys.type === 'Asset';
};

export const extractContentTypeId = (obj) => {
  if (isEntry(obj) && _.has(obj, 'sys.contentType.sys.id')) return obj.sys.contentType.sys.id;
  return null;
};

export const extractId = (obj) => {
  if (isEntry(obj) && _.has(obj, 'sys.id')) return obj.sys.id;
  return null;
};

export const isLink = (obj, contentTypeId) => {
  return isEntry(obj) && contentTypeId === extractContentTypeId(obj);
};
