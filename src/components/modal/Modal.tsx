import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

type ModalT = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalT) => {
    if (!isOpen) return null;

    const portalRoot = document.body; 

    return createPortal(
        <AnimatePresence>
            <motion.div 
                key="modal" 
                className={styles.Modal} 
                onClick={onClose} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{duration: 1}}
            >
                {children}
            </motion.div>
        </AnimatePresence>,
        portalRoot
    );
};

export default Modal;