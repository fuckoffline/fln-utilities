import {defineOptions} from "./model";

const primitiveTypes = [
  'Number',
  'String',
  'Boolean',
  'Undefined',
  'BigInt',
  'Symbol',
  'Function'
];

export const defineType = (anything: any, options?: defineOptions): string => {
  if (anything === undefined) return 'undefined';
  if (anything === null) return 'null';
  if (Array.isArray(anything)) return 'array';

  const typeFactory = anything.constructor.name;
  const type = primitiveTypes.includes(typeFactory) ? 'primitive' : 'object';

  if (type === 'primitive') return typeof anything;
  if (typeFactory !== 'Object') return options?.classnames ? typeFactory : 'class';

  return type;
};
