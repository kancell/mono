import * as React from 'react';
import { outputClassName } from 'components/base/index';

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

export const ListClass = {
  ListType: {
    primary: ['bg-white', 'shadow-sm'],
    pure: ['bg-white', 'shadow-sm'],
    text: ['bg-white', 'shadow-sm'],
  },
  ListSize: {
    large: ['w-10/12', 'm-2', 'h-64'],
    middle: ['w-10/12', 'm-2', 'h-48'],
    small: ['w-10/12', 'm-2', 'h-32'],
    auto: ['w-10/12', 'm-2'],
  },
  ListShape: {
    rectangle: ['rounded-none'],
    roundedRectangle: ['rounded-lg'],
    circle: ['rounded-full'],
  },
  children: {
    tag: 'uppercase tracking-wide text-sm text-indigo-500 font-semibold',
    title: 'mt-1 text-lg leading-tight font-medium text-black hover:underline text-2xl text-gray-600',
    content: 'mt-2 text-gray-500 text-sm',
  },
};

function MnList({ type = 'pure', size = 'auto', shape = 'roundedRectangle', tag, title, content, className, children }: ListProps) {
  const MnListClassName = outputClassName(ListClass,
    className,
    { ListType: type },
    { ListSize: size },
    { ListShape: shape });
  const BaseClassName = `flex overflow-hidden border-gray-200 shadow ${MnListClassName}`;
  return (
    <div className={BaseClassName}>
      {children}
      <div className="p-8 flex-grow">
        <div className={typeof tag === 'string' ? ListClass.children.tag : ''}>{tag}</div>
        <div className={typeof title === 'string' ? ListClass.children.title : ''}>{title}</div>
        <div className={typeof content === 'string' ? ListClass.children.content : ''}>{content}</div>
      </div>
    </div>
  );
}
MnList.Image = MnListImage;
export default MnList;
