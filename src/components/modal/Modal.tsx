import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  disableBackdropClick?: boolean;
  disablePlateClick?: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({
  isOpen,
  disableBackdropClick = false,
  disablePlateClick = false,
  onClose,
  children,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.Backdrop}
          onClick={() => {
            if (disableBackdropClick) return;
            onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.Modal}
            role="dialog"
            onClick={(e) => {
              e.stopPropagation();
              if (disablePlateClick) return;
              onClose();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
