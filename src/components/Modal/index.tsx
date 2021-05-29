import React, { useCallback } from "react";
import {
  Button,
  Modal as BootstrapModal,
  ModalProps as BootstrapModalProps
} from "react-bootstrap";

interface ModalProps extends BootstrapModalProps {
  title?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
}

const Modal = ({
  title,
  onPrimary,
  onSecondary,
  children,
  primaryLabel = "Submit",
  secondaryLabel = "Cancel"
}: ModalProps) => {
  const renderFooter = useCallback(() => {
    if (!onPrimary && !onSecondary) return null;
    return (
      <BootstrapModal.Footer>
        {!!onSecondary && <Button onClick={onPrimary}>{secondaryLabel}</Button>}{" "}
        {!!onPrimary && (
          <Button variant="primary" onClick={onPrimary}>
            {primaryLabel}
          </Button>
        )}
      </BootstrapModal.Footer>
    );
  }, [onPrimary, onSecondary, primaryLabel, secondaryLabel]);

  return (
    <BootstrapModal centered>
      {!!title && (
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{title}</BootstrapModal.Title>
        </BootstrapModal.Header>
      )}
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
      {renderFooter()}
    </BootstrapModal>
  );
};

export default Modal;
