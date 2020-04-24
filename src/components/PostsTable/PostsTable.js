import React from "react";
import { Table } from "reactstrap";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function PostsTable({ posts, users, setDataModal, toggle }) {
  return (
    <Table striped className="posts-table">
      <TableHeader titles={["ID", "Title", "Author"]} />
      <tbody>
        {posts.map((post) => {
          const author = users.find((user) => post.userId === user.id);

          return (author && 
            <TableRow
              post={post}
              id={post.id}
              title={post.title}
              author={author}
              toggle={toggle}
              setDataModal={setDataModal}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default PostsTable;
