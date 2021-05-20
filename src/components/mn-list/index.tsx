import React from 'react';

import listen from 'components/base/index';

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
    ['primary', ['mx-auto', 'bg-white', 'rounded-xl', 'shadow-md', 'overflow-hidden']],
    ['pure', ['bg-white', 'text-blue-middle', 'bordered']],
    ['text', ['bg-white']],
  ])],
  ['size', new Map([
    ['large', ['w-96', 'max-w-screen-2xl', 'h-32']],
    ['middle', ['w-10/12', 'max-w-screen-2xl', 'h-32']],
    ['small', ['w-36', 'h-16']],
  ])],
  ['shape', new Map([
    ['rectangle', ['rounded-none']],
    ['roundedRectangle', ['rounded']],
    ['circle', ['rounded-full']],
  ])],
]);

const proxy = listen(ClassMap);
const aa:string = 'rectangle';
console.log(proxy.shape[aa]);

const MnList: React.FC<ListProps> = ({ children, type = 'pure', size = 'middle', shape = 'roundedRectangle' }: ListProps) => {
  const MnListClassName = `
    ${proxy.type[type]}
    ${proxy.size[size]}
    ${proxy.shape[shape]}
  `;
  return (
    <div className={MnListClassName}>
      {children}
    </div>
  );
};

export default MnList;
