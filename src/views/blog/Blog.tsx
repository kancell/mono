import * as React from 'react';
import { useState } from 'react';
import MnTable from 'components/mn-table';

const colums = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Title',
    key: 'title',
    dataIndex: 'title',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
  },
];
const people = [
  {
    name: 'Jane Cooper',
    title: { text: 'Regional Paradigm Technician', subText: 'Optimization' },
    role: { text: 'Admin', subText: 'custom' },
    status: 'dodo',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: { text: 'Regional Paradigm Technician', subText: 'Optimization' },
    title: 'Regional Paradigm Technician阿斯顿萨达',
    role: 'Admin',

    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];

function Blog() {
  const [arr, setArr] = useState({
    q: 1,
    a: [{ k: 1 }, { k: 110 }],
  });
  function dd() {
    const ad = arr.a[1];
    ad.k = 4;
    setArr({ ...arr });
  }
  return (
    <>
      {
        arr.a.map((item) => (<p>{item.k}</p>))
      }
      <button type="button" onClick={() => dd()}>dataSource</button>
      <button type="button" onClick={() => (setArr({ ...arr, a: [...arr.a, { k: 2 }] }))}>
        {/* <button type="button" onClick={() => (setArr([...arr, { k: 2 }]))}>打赏</button> */}
        打赏
        { arr.q }
      </button>
      <MnTable colums={colums} dataSource={people} />
    </>
  );
}

export default Blog;
