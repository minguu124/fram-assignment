import React from "react";
import { Modal, Spinner } from "react-bootstrap";

interface LoadingProp {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProp) => {
  return (
    <Modal show={isLoading} backdrop="static" centered>
      <Modal.Body>
        <Spinner animation="border" variant="primary" />
      </Modal.Body>
    </Modal>
  );
};

export default Loading;
