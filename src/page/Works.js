// import React from "react";
// import { Link, useLocation, useParams } from "react-router-dom";

// const Works = () => {
//     const location = useLocation();
//     console.log("location", location);

//     const data = [
//         { id: 1, todo: 'Learn React' },
//         { id: 2, todo: 'Learn Node' },
//         { id: 3, todo: 'Learn JavaScript' },
//         { id: 4, todo: 'Learn Firebase' },
//         { id: 5, todo: 'Learn Next' },
//         { id: 6, todo: 'Learn the HTTP protocol' },
//       ];
//     return <div>
//         {`Current Page`}
//       <div>{`Current Page : ${location.pathname}`}</div>
//       <Link to={'/contact'}>Go to the contact page</Link>
//       <hr></hr>
//       {data.map((work)=>{
//         return(
//             <div key={work.id}>
//                 <div>to do: {work.id}</div>
//                 <Link to={`/work/${work.id}`}>
//                 <span>➡️ Go to: {work.todo}</span>
//                 </Link>
//             </div>
            
//         );
//       })}
//     </div>;
// }
// export default Works;


// src/pages/Works.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';

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
