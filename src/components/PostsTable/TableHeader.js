import React from "react";

function TableHeader({ titles }) {
  return (
    <thead>
      <tr>
        {titles.map((title) => (
          <th>{title}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
