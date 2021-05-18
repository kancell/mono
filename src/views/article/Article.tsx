import * as React from 'react';
import MnList from 'components/mn-list/index';

const Article: React.FC<{}> = () => (
  React.useMemo(
    () => (
      <div>
        <MnList type="primary">123</MnList>
      </div>
    ), [],
  )
);

export default Article;
