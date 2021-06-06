import * as React from 'react';
import MnList from 'components/mn-list/index';
import background from 'assets/background.jpg';

const Article: React.FC<{}> = () => {
  const a = 1;
  console.log(a);
  return (
    React.useMemo(
      () => (
        <div className="mt-4 w-full">
          <MnList
            type="primary"
            size="auto"
            shape="rectangle"
            title={<a href="item.href">从零开始，构建tailwind风格组件库</a>}
            content="Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers."
          >
            <MnList.Image src={`${background}`} size="middle" />
          </MnList>
          <MnList type="primary" size="middle" shape="rectangle" tag="doing" title={<h2 className="text-gray-100">sadassd</h2>} className="">
            <MnList.Image src={`${background}`} position="right" className="m-2" />
          </MnList>
        </div>
      ), [],
    )
  );
};

export default Article;
