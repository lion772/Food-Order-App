import React, { FC, Fragment, MouseEventHandler, ReactNode } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

interface ModalProps {
    children?: ReactNode | undefined;
    onClose?: MouseEventHandler | undefined;
}

const Backdrop: FC<ModalProps> = ({ onClose }) => {
    return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay: FC<ModalProps> = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

const portalElement = document.querySelector("#overlays") as Element;
const Modal: FC<ModalProps> = ({ onClose, children }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
