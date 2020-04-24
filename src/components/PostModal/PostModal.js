import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function PostModal({ dataModal, modal, toggle, className }) {
  const { post, author } = dataModal || {};

  return (dataModal && 
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{post.title}</ModalHeader>
      <ModalBody>
        <p>{post.body}</p>
        <span className="modal__author">Author: {author.name}</span>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default PostModal;
