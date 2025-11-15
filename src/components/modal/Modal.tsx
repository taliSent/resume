import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";
import styles from "./Modal.module.css";

type ModalT = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalT) => {
    return <AnimatePresence>
            {isOpen && <motion.div 
                key="modal" 
                className={styles.Modal} 
                onClick={onClose} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{duration: 0.5}}
            >
                {children}
            </motion.div>}
        </AnimatePresence>
};

export default Modal;