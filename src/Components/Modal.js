import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={() => props.valid()}></div>
      <div className={styles.modal}>
        <div className={styles.header}>Invalid Input</div>
        <div className={styles.main}>
          <div className={styles.message}>{props.message}</div>
          <button
            className={styles.modal__button}
            onClick={() => props.valid()}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
