import React from 'react';
import { outputClassName } from 'components/base/index';

export type ImgPosition = 'left' | 'right';
export type ImgSize = 'small' | 'middle' | 'large' | 'auto';

export interface ImgProps {
  position?: ImgPosition,
  size?: ImgSize,
  className?: string,
  src?: string,
  width?:string
}
// <div style={{ backgroundImage: `url(${src})` }} className={ImgClassName} />
// <img className={ImgClassName} src={src} alt=" " />
/* export const ImgClass = new Map([
  ['imagePosition', new Map([
    ['left', ['order-first']],
    ['right', ['order-last']],
  ])],
  ['imageSize', new Map([
    ['small', ['w-32']],
    ['middle', ['w-48']],
    ['large', ['w-64']],
  ])],
]); */
export const ImgClass = {
  imagePosition: {
    left: ['order-first'],
    right: ['order-last'],
  },
  imageSize: {
    small: ['w-32'],
    middle: ['w-64'],
    large: ['w-64'],
  },
};

const MnListImage: React.FC<ImgProps> = ({ position = 'left', size = 'middle', className, src }: ImgProps) => {
  const ImgClassName = outputClassName(ImgClass,
    className,
    { imagePosition: position },
    { imageSize: size });
  const BaseClassName = `bg-cover ${ImgClassName}`;

  return (
    <div style={{ backgroundImage: `url(${src})` }} className={BaseClassName} />
  );
};

export default MnListImage;
