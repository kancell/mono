import React from 'react';
import listen from 'components/base/index';

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
export const ImgClass = new Map([
  ['position', new Map([
    ['left', ['order-first']],
    ['right', ['order-last']],
  ])],
  ['size', new Map([
    ['small', ['w-32', 'h-full']],
    ['middle', ['w-48', 'h-full']],
    ['large', ['w-64', 'h-full']],
    ['auto', ['w-auto', 'h-auto']],
  ])],
]);

const proxy = listen(ImgClass);

const MnListImage: React.FC<ImgProps> = ({ position = 'left', size = 'middle', className, src }: ImgProps) => {
  const ImgClassName = `flex bg-cover ${proxy.position[position]} ${proxy.size[size]} ${className === undefined ? '' : className}`;

  return (
    <div style={{ backgroundImage: `url(${src})` }} className={ImgClassName} />
  );
};

export default MnListImage;
