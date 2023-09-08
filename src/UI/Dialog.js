import style from "./Dialog.module.scss";
import { useState } from "react";

const Dialog = (prop) => {
  const [pomodora, setPomodora] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handleMouseEnterArrowUP = (e) =>
    (e.target.src = "/assets/icon-arrow-up-focus.svg");
  const handleMouseLeaveArrowUP = (e) =>
    (e.target.src = "/assets/icon-arrow-up.svg");
  const handleMouseEnterArrowDown = (e) =>
    (e.target.src = "/assets/icon-arrow-down-focus.svg");
  const handleMouseLeaveArrowDown = (e) =>
    (e.target.src = "/assets/icon-arrow-down.svg");

  const handleClickIncrement = (e) => {
    e.target.nextElementSibling.value++;
  };

  const handleClickDecrement = (e) => {
    e.target.previousElementSibling.value--;
  };

  const handleKeyUpPomodora = (e) => {
    if (e.keyCode === 38) setPomodora(pomodora + 1);
  };

  const handleKeyDownPomodora = (e) => {
    if (e.keyCode === 40) setPomodora(pomodora - 1);
  };

  const handleKeyUpShortBreak = (e) => {
    if (e.keyCode === 38) setShortBreak(shortBreak + 1);
  };

  const handleKeyDownShortBreak = (e) => {
    if (e.keyCode === 40) setShortBreak(shortBreak - 1);
  };

  const handleKeyUpLongBreak = (e) => {
    if (e.keyCode === 38) setLongBreak(longBreak + 1);
  };

  const handleKeyDownLongBreak = (e) => {
    if (e.keyCode === 40) setLongBreak(longBreak - 1);
  };

  const handleClickFontSwitcher = (e) => {
    // Remove active class from all the btn elements
    document
      .querySelectorAll(`.${style["dialog-font-switcher-btn"]}`)
      .forEach((btn) =>
        btn.classList.remove(`${style["dialog-font-switcher-btn-active"]}`)
      );
    // Add the active class to the btn element that is being clicked
    e.target.classList.add(`${style["dialog-font-switcher-btn-active"]}`);
  };

  const handleClickThemeSwitcher = (e) => {
    // Remove active class from all the btn elements
    document
      .querySelectorAll(`.${style["dialog-theme-switcher-btn"]}`)
      .forEach((btn) => {
        btn.classList.remove(`${style["dialog-theme-switcher-btn-active"]}`);
      });
    // Add the active class to the btn element that is being clicked
    e.target.classList.add(`${style["dialog-theme-switcher-btn-active"]}`);
  };

  const handleClickDialogClose = (e) => {
    prop.handleClickDialogOpen();
  };

  const handleClickApply = (e) => {
    // Change font-family
    const btnsFontFamily = document.querySelectorAll(
      `.${style["dialog-font-switcher-btn"]}`
    );
    btnsFontFamily.forEach((btn) => {
      if (
        btn.classList.contains(`${style["dialog-font-switcher-btn-active"]}`)
      ) {
        document.body.style.fontFamily = getComputedStyle(btn).fontFamily;
      }
    });
    prop.handleClickDialogOpen();
  };

  return (
    <div className={style["dialog"]}>
      <div className={style["dialog-header"]}>
        <h2 className={style["dialog-header-h"]}>Settings</h2>
        <img
          onMouseEnter={(e) =>
            (e.target.src = "/assets/icon-close-hovered.svg")
          }
          onMouseLeave={(e) => (e.target.src = "/assets/icon-close.svg")}
          className={style["dialog-header-close-img"]}
          onClick={handleClickDialogClose}
          src="/assets/icon-close.svg"
          alt=""
        />
      </div>
      <div class={style["dialog-input"]}>
        <h3 className={style["dialog-input-h"]}>TIME ( MINUTES )</h3>
        <div className={style["dialog-input-flex"]}>
          <div className={style["dialog-input-container"]}>
            <label className={style["dialog-input-label"]}>pomodoro</label>
            <img
              onMouseEnter={handleMouseEnterArrowUP}
              onMouseLeave={handleMouseLeaveArrowUP}
              onClick={handleClickIncrement}
              className={`${style["dialog-input-arrow-btn"]} ${style["dialog-input-arrow-btn-up"]}`}
              src="/assets/icon-arrow-up.svg"
              alt=""
            />
            <input
              onKeyUp={handleKeyUpPomodora}
              onKeyDown={handleKeyDownPomodora}
              className={style["dialog-input-ele"]}
              type="number"
              value={pomodora}
            />
            <img
              onMouseEnter={handleMouseEnterArrowDown}
              onMouseLeave={handleMouseLeaveArrowDown}
              onClick={handleClickDecrement}
              className={`${style["dialog-input-arrow-btn"]} ${style["dialog-input-arrow-btn-down"]}`}
              src="/assets/icon-arrow-down.svg"
              alt=""
            />
          </div>
          <div className={style["dialog-input-container"]}>
            <label className={style["dialog-input-label"]}>short break</label>
            <img
              onMouseEnter={handleMouseEnterArrowUP}
              onMouseLeave={handleMouseLeaveArrowUP}
              onClick={handleClickIncrement}
              className={`${style["dialog-input-arrow-btn"]} ${style["dialog-input-arrow-btn-up"]}`}
              src="/assets/icon-arrow-up.svg"
              alt=""
            />
            <input
              onKeyUp={handleKeyUpShortBreak}
              onKeyDown={handleKeyDownShortBreak}
              className={style["dialog-input-ele"]}
              type="number"
              value={shortBreak}
            />
            <img
              onMouseEnter={handleMouseEnterArrowDown}
              onMouseLeave={handleMouseLeaveArrowDown}
              onClick={handleClickDecrement}
              className={`${style["dialog-input-arrow-btn"]} ${style["dialog-input-arrow-btn-down"]}`}
              src="/assets/icon-arrow-down.svg"
              alt=""
            />
          </div>
          <div className={style["dialog-input-container"]}>
            <label className={style["dialog-input-label"]}>long break</label>
            <img
              onMouseEnter={handleMouseEnterArrowUP}
              onMouseLeave={handleMouseLeaveArrowUP}
              onClick={handleClickIncrement}
              className={`${style["dialog-input-arrow-btn"]} ${style["dialog-input-arrow-btn-up"]}`}
              src="/assets/icon-arrow-up.svg"
              alt=""
            />
            <input
              onKeyUp={handleKeyUpLongBreak}
              onKeyDown={handleKeyDownLongBreak}
              className={style["dialog-input-ele"]}
              type="number"
              value={longBreak}
            />
            <img
              onMouseEnter={handleMouseEnterArrowDown}
              onMouseLeave={handleMouseLeaveArrowDown}
              onClick={handleClickDecrement}
              className={`${style["dialog-input-arrow-btn"]} ${style["dialog-input-arrow-btn-down"]}`}
              src="/assets/icon-arrow-down.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={style["dialog-font-switcher"]}>
        <div className={style["dialog-font-switcher-flex"]}>
          <h3 className={style["dialog-font-switcher-h"]}>FONT</h3>
          <div
            onClick={handleClickFontSwitcher}
            className={style["dialog-font-switcher-btn-flex"]}
          >
            <button
              className={`${style["dialog-font-switcher-btn"]} ${style["dialog-font-switcher-btn-active"]}`}
            >
              Aa
            </button>
            <button className={style["dialog-font-switcher-btn"]}>Aa</button>
            <button className={style["dialog-font-switcher-btn"]}>Aa</button>
          </div>
        </div>
      </div>
      <div className={style["dialog-theme-switcher"]}>
        <div className={style["dialog-theme-switcher-flex"]}>
          <h3 className={style["dialog-theme-switcher-h"]}>COLOR</h3>
          <div
            onClick={handleClickThemeSwitcher}
            className={style["dialog-theme-switcher-btn-flex"]}
          >
            <button
              className={`${style["dialog-theme-switcher-btn"]} ${style["dialog-theme-switcher-btn-active"]}`}
            ></button>
            <button className={style["dialog-theme-switcher-btn"]}></button>
            <button className={style["dialog-theme-switcher-btn"]}></button>
          </div>
        </div>
      </div>
      <button onClick={handleClickApply} className={style["dialog-apply-btn"]}>
        Apply
      </button>
    </div>
  );
};

export default Dialog;
