import * as React from 'react';
import MnList from 'components/mn-list/index';

const Article: React.FC<{}> = () => {
  const a = 1;
  return (
    React.useMemo(
      () => (
        <div className="w-full h-full flex content-center items-center flex-col">
          <MnList type="primary" size="large">
            <div>{a}</div>
          </MnList>
          <MnList type="pure">
            {a}
          </MnList>
        </div>
      ), [a],
    )
  );
};

export default Article;
