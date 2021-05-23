import * as React from 'react';
import MnList from 'components/mn-list/index';

function Blog() {
  const MnListClassName = 'flex overflow-hidden';

  return (
    <div className={MnListClassName}>
      <MnList type="primary" size="auto" title="Finding customers for your new business" content="00000000000000000000000000000000000000000Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers." tag="dosometing" />
      <div className="p-8 flex-grow">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">123</div>
        <div className="mt-1 text-lg leading-tight font-medium text-black hover:underline text-2xl text-gray-600">123</div>
        <div className="mt-2 text-gray-500 text-sm">123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
  );
}

export default Blog;
