import React from 'react';

export type ListType = 'primary' | 'pure' |'text' | 'link';
export type ListSize = 'large' | 'middle' | 'small' | 'custom';
export type ListShape = 'rectangle' | 'roundedRectangle' |'circle'

export interface ListProps {
  children?: any,
  type?: ListType,
  size?: ListSize,
  shape?: ListShape,
}

export const ClassMap = new Map([
  ['type', new Map([
    ['primary', ['bg-blue-middle', 'text-white', 'bordered']],
    ['pure', ['bg-white', 'text-blue-middle', 'bordered']],
    ['text', ['bg-blue-middle', 'text-white', 'bordered']],
  ])],
  ['size', new Map([
    ['large', ['w-96', 'h-32']],
    ['middle', ['w-48', 'h-24']],
    ['small', ['w-36', 'h-16']],
  ])],
]);

export const ClassObject = {
  type: {
    primary: ['bg-blue-middle', 'text-white', 'bordered'],
    pure: ['bg-white', 'text-blue-middle', 'bordered'],
    text: ['bg-blue-middle', 'text-white', 'bordered'],
  },
  size: {
    large: ['w-96', 'h-32'],
    middle: ['w-48', 'h-24'],
    small: ['w-36', 'h-16'],
  },
};

const proxy = new Proxy(ClassObject, {
  get(target) {
    if (Array.isArray(target)) {
      return target.join(' ');
    }
    return target;
  },
});

console.log(proxy.type);

const MnList: React.FC<ListProps> = ({ children, type = 'primary', size = 'middle', shape }: ListProps) => {
  const MnListClassName = `
    ${ClassMap.get('type')?.get(type)?.join(' ')}
    ${ClassMap.get('size')?.get(size)?.join(' ')}
    ${shape}
  `;
  return (
    <div className={MnListClassName}>
      {children}
    </div>
  );
};

export default MnList;
