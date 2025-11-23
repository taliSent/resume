import React, { useRef, useEffect, ReactNode, FC } from "react";

type ModalDialogProps = {
  isOpen: boolean;
  enableBackdrop: boolean;
  onClose: () => void;
  children: ReactNode;
};
const ModalDialog: FC<ModalDialogProps> = ({
  isOpen,
  enableBackdrop,
  onClose,
  children,
}: ModalDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleCancel = (event: Event) => {
      if (event.target === dialogRef.current) {
        onClose();
      }
    };
    dialogRef.current?.addEventListener("cancel", handleCancel);
    return () => {
      dialogRef.current?.removeEventListener("cancel", handleCancel);
    };
  }, [onClose]);

  return (
    <dialog ref={dialogRef} onAnimationEnd={() => !isOpen && onClose()}>
      {children}
    </dialog>
  );
};

export default ModalDialog;
