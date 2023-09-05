import style from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={style["modal"]}>
      <img
        className={style["modal-img"]}
        src="/assets/icon-settings.svg"
        alt=""
      />
    </div>
  );
};

export default Modal;
