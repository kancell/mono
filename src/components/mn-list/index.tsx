import React from 'react';

export type ListType = 'primary' | 'pure' |'text' | 'link';
export type ListSize = 'large' | 'middle' | 'small' | 'custom';
export type ListShape = 'rectangle' | 'roundedRectangle' |'circle'

export interface ListProps {
  type?: ListType,
  size?: ListSize,
  shape?: ListShape,
}

const MnList: React.FC<ListProps> = ({ children, type, size, shape, ...rest }) => (
  React.useMemo(
    () => (
      <div className={`w-96 h-16 ${type} ${size} ${shape} ${rest}`}>
        {children}
      </div>
    ), [children, type, size, shape, rest],
  )
);

export default MnList;
