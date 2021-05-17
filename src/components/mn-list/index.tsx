import { type } from 'os';
import React from 'react';

export type ButtonType = 'primary' | 'pure' |'text' | 'link';
export type ButtonSize = 'large' | 'middle' | 'small' | 'custom';
export type ButtonShape = 'rectangle' | 'roundedRectangle' |'circle'

export interface ButtonProps {
  type?: ButtonType,
  size?: ButtonSize,
  shpae?: ButtonShape,
  loading?: boolean,
  disabled?: boolean
  htmlType?: string,
  className?: string,
}
function MnList() {
  return (
    <div>1</div>
  );
}

export default MnList;