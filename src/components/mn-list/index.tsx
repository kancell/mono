import * as React from 'react';
import listen from 'components/base/index';

import MnListImage from 'components/mn-list/Image';

export type ListType = 'primary' | 'pure' |'text' | 'link';
export type ListSize = 'large' | 'middle' | 'small' | 'auto' |'custom';
export type ListShape = 'rectangle' | 'roundedRectangle' |'circle'

export interface ListProps {
  children?: any,
  type?: ListType,
  size?: ListSize,
  shape?: ListShape,
  tag?: string | React.ReactElement,
  title?: string | React.ReactElement,
  content?: string | React.ReactElement,
  className?: string,
}

export const ListClass = new Map([
  ['type', new Map([
    ['primary', ['mx-auto', 'bg-white', 'shadow-sm']],
    ['pure', ['mx-auto', 'bg-white', 'shadow-sm']],
    ['text', ['mx-auto', 'bg-white', 'shadow-sm']],
  ])],
  ['size', new Map([
    ['large', ['w-10/12', 'm-2', 'h-64']],
    ['middle', ['w-10/12', 'm-2', 'h-48']],
    ['small', ['w-10/12', 'm-2', 'h-32']],
    ['auto', ['w-10/12', 'm-2']],
  ])],
  ['shape', new Map([
    ['rectangle', ['rounded-none']],
    ['roundedRectangle', ['rounded-xl']],
    ['circle', ['rounded-full']],
  ])],
]);

const proxy = listen(ListClass);

function MnList({ type = 'pure', size = 'auto', shape = 'roundedRectangle', tag, title, content, className, children }: ListProps) {
  const MnListClassName = `flex overflow-hidden ${proxy.type[type]} ${proxy.size[size]} ${proxy.shape[shape]} ${className === undefined ? '' : className}`;

  return (
    <div className={MnListClassName}>
      {children}
      <div className="p-8 flex-grow">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{tag}</div>
        <div className="mt-1 text-lg leading-tight font-medium text-black hover:underline text-2xl text-gray-600">{title}</div>
        <div className="mt-2 text-gray-500 text-sm">{content}</div>
      </div>

    </div>
  );
}
MnList.Image = MnListImage;
export default MnList;
