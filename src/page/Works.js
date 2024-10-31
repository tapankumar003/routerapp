import React from 'react';
import { Link} from 'react-router-dom';

const data = [
  { id: 1, todo: 'Learn React' },
  { id: 2, todo: 'Learn Node' },
  { id: 3, todo: 'Learn JavaScript' },
  { id: 4, todo: 'Learn Firebase' },
  { id: 5, todo: 'Learn Next' },
  { id: 6, todo: 'Learn the HTTP protocol' },
];

function Works() {
  return (
    <div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>To do: {work.id}</div>
            <Link to={`/works/${work.id}`}>
              <span style={{ cursor: 'pointer' }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
