import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPostsAction, getUsersAction } from "../../redux/actions/index";
import { Alert } from "reactstrap";

import PostsTable from "../../components/PostsTable/PostsTable";
import PostModal from "../../components/PostModal/PostModal";

function Main({ posts, users, getPostsAction, getUsersAction }) {
  const [modal, setModal] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    getPostsAction();
    getUsersAction();
  }, []);

  return (
    <>
      {posts.length && users.length ? 
        <PostsTable
          posts={posts}
          users={users}
          toggle={toggle}
          setDataModal={setDataModal}
        />
       : 
        <Alert color="danger">Произошла ошибка при загрузке данных</Alert>
      }

      <PostModal modal={modal} toggle={toggle} dataModal={dataModal} />
    </>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  users: state.users,
});

export default connect(mapStateToProps, { getPostsAction, getUsersAction })(Main);
