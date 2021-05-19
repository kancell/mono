import { type } from 'os';
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
    <div>1</div>
  );
}

export default MnInput;
