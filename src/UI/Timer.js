import { React, useState } from "react";
import style from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState("00:00");

  return (
    <div className={style["timer"]}>
      <div className={style["timer-inner"]}>
        <div className={style["timer-progress-bar"]}></div>
        <div className={style["timer-counter-box"]}>
          <p className={style["timer-counter"]}>{time}</p>
          <button className={style["timer-counter-button"]}>PAUSE</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
