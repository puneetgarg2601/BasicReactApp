import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>Invalid Input</div>
      <div className={styles.main}>
        <div className={styles.message}>{props.message}</div>
        <button className={styles.modal__button} onClick={() => props.valid()}>
          Okay
        </button>
      </div>
    </div>
  );
};
export default Modal;
