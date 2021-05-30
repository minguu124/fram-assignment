import React from "react";
import { Modal, Spinner } from "react-bootstrap";

interface LoadingProp {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProp) => {
  return (
    <Modal dialogAs={() => <div />} show={isLoading}>
      <Spinner animation="border" variant="primary" />
    </Modal>
  );
};

export default Loading;
