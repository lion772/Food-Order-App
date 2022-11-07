import React, { FC, Fragment, ReactNode } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

interface ModalProps {
    children: ReactNode;
}

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
};

const ModalOverlay: FC<ModalProps> = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

const portalElement = document.querySelector("#overlays") as Element;
const Modal: FC<ModalProps> = ({ children }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
