import style from "./Dialog.module.scss";
import { useState, useEffect } from "react";

const Dialog = (prop) => {
  const [pomodora, setPomodora] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || "theme-default"
  );
  const [selectedFontFamily, setSelectedFontFamily] = useState(
    localStorage.getItem("selectedFontFamily") || "fontfamily-kumbh"
  );

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
    // setPomodora(Number(pomodora) + 1);
  };

  const handleClickDecrement = (e) => {
    e.target.previousElementSibling.value--;
    // setPomodora(pomodora - 1);
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
    setSelectedFontFamily(e.target.id);
  };

  const handleClickThemeSwitcher = (e) => {
    setSelectedTheme(e.target.id);
  };

  const handleClickDialogClose = (e) => {
    prop.handleClickDialogOpen();
  };

  const handleChangeInputPomodora = (e) => {
    // setPomodora(e.target.value);
    console.log("input changed");
    console.log(e.target.value);
  };
  const handleClickApply = (e) => {
    // Change font-family
    const btnsFontFamilySwitcher = document.querySelectorAll(
      `.${style["dialog-font-switcher-btn"]}`
    );
    btnsFontFamilySwitcher.forEach((btn) => {
      if (
        btn.classList.contains(`${style["dialog-font-switcher-btn-active"]}`)
      ) {
        document.body.style.fontFamily = getComputedStyle(btn).fontFamily;

        if (btn.id === "fontfamily-kumbh") {
          document.documentElement.style.setProperty(
            "--timer-letter-spacing",
            "-5px"
          );
          document.documentElement.style.setProperty(
            "--timer-font-weight",
            700
          );
        } else if (btn.id === "fontfamily-roboto") {
          document.documentElement.style.setProperty(
            "--timer-letter-spacing",
            "normal"
          );
          document.documentElement.style.setProperty(
            "--timer-font-weight",
            700
          );
        } else if (btn.id === "fontfamily-spacemono") {
          document.documentElement.style.setProperty(
            "--timer-letter-spacing",
            "-10px"
          );
          document.documentElement.style.setProperty(
            "--timer-font-weight",
            "400"
          );
        }
      }
    });

    // Change Theme
    const btnsThemeSwitcher = document.querySelectorAll(
      `.${style["dialog-theme-switcher-btn"]}`
    );

    btnsThemeSwitcher.forEach((btn) => {
      if (
        btn.classList.contains(`${style["dialog-theme-switcher-btn-active"]}`)
      ) {
        if (btn.id === "theme-default") {
          document.documentElement.style.setProperty("--tab-bg-clr", "#f87070");
          document.documentElement.style.setProperty(
            "--progressbar-bg-clr",
            "#f87070"
          );
          document.documentElement.style.setProperty(
            "--apply-btn-hover",
            "#f88e8dff"
          );
        } else if (btn.id === "theme-diamond") {
          document.documentElement.style.setProperty("--tab-bg-clr", "#70f3f8");
          document.documentElement.style.setProperty(
            "--progressbar-bg-clr",
            "#70f3f8"
          );
          document.documentElement.style.setProperty(
            "--apply-btn-hover",
            "#8df5f9"
          );
        } else if (btn.id === "theme-amethyst") {
          document.documentElement.style.setProperty("--tab-bg-clr", "#d881f8");
          document.documentElement.style.setProperty(
            "--progressbar-bg-clr",
            "#d881f8"
          );
          document.documentElement.style.setProperty(
            "--apply-btn-hover",
            "#e09af9"
          );
        }
      }
    });

    prop.handleClickDialogOpen();
  };

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
    localStorage.setItem("selectedFontFamily", selectedFontFamily);
  }, [selectedTheme, selectedFontFamily]);

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
              onChange={handleChangeInputPomodora}
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
              className={`${style["dialog-font-switcher-btn"]} ${
                selectedFontFamily === "fontfamily-kumbh"
                  ? style["dialog-font-switcher-btn-active"]
                  : ""
              }`}
              id="fontfamily-kumbh"
            >
              Aa
            </button>
            <button
              className={`${style["dialog-font-switcher-btn"]} ${
                selectedFontFamily === "fontfamily-roboto"
                  ? style["dialog-font-switcher-btn-active"]
                  : ""
              }`}
              id="fontfamily-roboto"
            >
              Aa
            </button>
            <button
              className={`${style["dialog-font-switcher-btn"]} ${
                selectedFontFamily === "fontfamily-spacemono"
                  ? style["dialog-font-switcher-btn-active"]
                  : ""
              }`}
              id="fontfamily-spacemono"
            >
              Aa
            </button>
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
              className={`${style["dialog-theme-switcher-btn"]} ${
                selectedTheme === "theme-default"
                  ? style["dialog-theme-switcher-btn-active"]
                  : ""
              }`}
              id="theme-default"
            ></button>
            <button
              className={`${style["dialog-theme-switcher-btn"]} ${
                selectedTheme === "theme-diamond"
                  ? style["dialog-theme-switcher-btn-active"]
                  : ""
              }`}
              id="theme-diamond"
            ></button>
            <button
              className={`${style["dialog-theme-switcher-btn"]} ${
                selectedTheme === "theme-amethyst"
                  ? style["dialog-theme-switcher-btn-active"]
                  : ""
              }`}
              id="theme-amethyst"
            ></button>
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
