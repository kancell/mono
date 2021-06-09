import * as React from 'react';

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
    name: { text: 'Jane Cooper', subText: 'jane.cooper@example.com' },
    title: { text: 'Regional Paradigm Technician', subText: 'Optimization' },
    role: 'Admin',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];
function Blog() {
  return (
    <MnTable colums={colums} dataSource={people} />
  );
}

export default Blog;
