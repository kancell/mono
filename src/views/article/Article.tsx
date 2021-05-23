import * as React from 'react';
import MnList from 'components/mn-list/index';
import background from 'assets/background.jpg';

const Article: React.FC<{}> = () => {
  const a = 1;
  console.log(a);
  return (
    React.useMemo(
      () => (
        <div>
          <MnList
            type="primary"
            size="auto"
            shape="rectangle"
            title={<a href="item.href">从零开始，构建tailwind风格组件库</a>}
            content="Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers."
          >
            <MnList.Image src={`${background}`} size="middle" />
          </MnList>
          <MnList type="primary" size="auto" title="Finding customers for your new business" content="00000000000000000000000000000000000000000Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers." tag="dosometing" />
          <MnList type="primary" size="auto" content="Finding customers for your new business" title="Finding customers" />
          <MnList type="primary" size="auto" content="Finding customers for your new business" title="Finding customers" />
          <MnList type="primary" size="auto" content="Finding customers for your new business" title="Finding customers" />
          <MnList type="primary" size="auto" content="Finding customers for your new business" title="Finding customers" />
          <MnList type="primary" size="auto" content="Finding customers for your new business" title="Finding customers" />
          <MnList type="primary" size="auto" content="Finding customers for your new business" title="Finding customers" />
          <MnList type="primary" size="large" shape="circle" className="h-96">
            <MnList.Image src={`${background}`} position="right" />
          </MnList>
          <MnList type="pure" size="small" shape="circle">
            {a}
          </MnList>
        </div>
      ), [],
    )
  );
};

export default Article;
