import { React, useState } from "react";
import style from "./Timer.module.scss";

const Timer = () => {
  return (
    <div className={style["timer"]}>
      <div className={style["timer-outer"]}></div>
      <div className={style["timer-inner"]}>
        <div className={style["timer-progress-bar"]}></div>
      </div>
      <div className={style["timer-counter"]}>
        <p className={style["timer-counter-desc"]}>00:00</p>
        <button className={style["timer-counter-btn"]}>RESTART</button>
      </div>
    </div>
  );
};

export default Timer;
