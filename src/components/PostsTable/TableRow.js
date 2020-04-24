import React from "react";

function TableRow({ id, title, author, post, setDataModal, toggle }) {
  return (
    <tr className="posts-table__row">
      <td>{id}</td>
      <td>
        <span
          className="posts-table__title"
          onClick={() => {
            setDataModal({ post, author });
            toggle();
          }}
        >
          {title}
        </span>
      </td>
      <td>{author.name}</td>
    </tr>
  );
}

export default TableRow;
