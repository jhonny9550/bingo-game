import clsx from "clsx";
import React, { useCallback } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  backdrop?: boolean;
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({ backdrop = true, ...props }) => {
  const rootElement = document.getElementById("modal");

  const handleContentClick: React.MouseEventHandler<HTMLDivElement> =
    useCallback((e) => {
      e.stopPropagation();
    }, []);

  if (!rootElement || !props.open) return null;
  return createPortal(
    <div className={clsx(["modal", { backdrop }])} onClick={props.onClose}>
      <div className="modal__content" onClick={handleContentClick}>
        {props.children}
      </div>
    </div>,
    rootElement
  );
};

export default Modal;
