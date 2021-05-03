import React from 'react';

export default function Pagination({nextPage, previousPage}) {
  return (
    <div>
      {previousPage && <button onClick={previousPage}>Previous</button>}
      {nextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
}
