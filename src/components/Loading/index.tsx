import React from "react";
import { Modal, Spinner } from "react-bootstrap";

interface LoadingProp {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProp) => {
  return (
    <Modal>
      <div style={{ height: 200 }}>
        <p>Some content or children or something.</p>
      </div>
    </Modal>
  );
};

export default Loading;
