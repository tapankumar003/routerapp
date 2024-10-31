import React from 'react';
import { useParams } from 'react-router-dom';

const data = [
  { id: 1, todo: 'Learn React' },
  { id: 2, todo: 'Learn Node' },
  { id: 3, todo: 'Learn JavaScript' },
  { id: 4, todo: 'Learn Firebase' },
  { id: 5, todo: 'Learn Next' },
  { id: 6, todo: 'Learn the HTTP protocol' },
];

function Work() {
  const param = useParams();

  const work = data.find((work) => work.id === parseInt(param.id));

  return <div>{work.todo}</div>;
}
 export default Work;
