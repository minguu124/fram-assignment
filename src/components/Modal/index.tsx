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
  disabled?: boolean;
}

const Modal = ({
  title,
  onPrimary,
  onSecondary,
  children,
  primaryLabel = "Submit",
  secondaryLabel = "Cancel",
  disabled,
  ...rest
}: ModalProps) => {
  const renderFooter = useCallback(() => {
    if (!onPrimary && !onSecondary) return null;
    return (
      <BootstrapModal.Footer>
        {!!onSecondary && (
          <Button variant="secondary" onClick={onSecondary}>
            {secondaryLabel}
          </Button>
        )}{" "}
        {!!onPrimary && (
          <Button disabled={disabled} variant="primary" onClick={onPrimary}>
            {primaryLabel}
          </Button>
        )}
      </BootstrapModal.Footer>
    );
  }, [disabled, onPrimary, onSecondary, primaryLabel, secondaryLabel]);

  return (
    <BootstrapModal centered {...rest}>
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
