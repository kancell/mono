import React from 'react';

export type InputType = 'primary' | 'pure' |'text' | 'link';
export type InputSize = 'large' | 'middle' | 'small' | 'custom';
export type InputShape = 'rectangle' | 'roundedRectangle' |'circle'

export interface InputProps {
  type?: InputType,
  size?: InputSize,
  shpae?: InputShape,
  loading?: boolean,
  disabled?: boolean
  htmlType?: string,
  className?: string,
}
function MnInput() {
  return (
    <div>
      <div className="flex w-16 h-16">1</div>
      <div className="flex w-16 h-16">1</div>
      <div className="flex w-16 h-16">1</div>
    </div>
  );
}

export default MnInput;
