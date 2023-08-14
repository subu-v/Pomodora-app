import { React, useState, useRef, useEffect } from "react";
import style from "./Timer.module.scss";

const Timer = () => {
  const startTime = 1;
  const totalTimeInSecs = useRef(startTime * 60);
  const startStopTimerBtn = useRef(null);
  const startPomodoraInterval = useRef(null);
  const [startStopTimerFlag, setstartStopTimerFlag] = useState(false);

  const timeCalculation = () => {
    if (totalTimeInSecs.current === 0) {
      clearInterval(startPomodoraInterval.current);
      startStopTimerBtn.current.textContent = "RESTART";
    }
    
    const minutes = Math.floor(totalTimeInSecs.current / 60);
    const seconds = totalTimeInSecs.current % 60;

    document.querySelector(
      `.${style["timer-countdown-desc"]}`
    ).textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;

    totalTimeInSecs.current--;
  };

  const startStopTimerBtnHandler = () => {
    if (startStopTimerBtn.current.textContent === "RESTART") {
      if (!startStopTimerFlag) totalTimeInSecs.current = startTime * 60;
      setstartStopTimerFlag(true);
      startStopTimerBtn.current.textContent = "PAUSE";
      startStopTimerBtn.current.style.width = "112px";
    } else if (startStopTimerBtn.current.textContent === "PAUSE") {
      setstartStopTimerFlag(false);
      startStopTimerBtn.current.textContent = "RESTART";
      startStopTimerBtn.current.style.width = "159px";
    }
  };

  useEffect(() => {
    if (startStopTimerFlag)
      startPomodoraInterval.current = setInterval(timeCalculation, 1000);
    return () => clearInterval(startPomodoraInterval.current);
  }, [startStopTimerFlag]);

  return (
    <div className={style["timer"]}>
      <div className={style["timer-outer"]}></div>
      <div className={style["timer-inner"]}>
        <div className={style["timer-progress-bar"]}></div>
      </div>
      <div className={style["timer-countdown"]}>
        <p className={style["timer-countdown-desc"]}>00:00</p>
        <button
          ref={startStopTimerBtn}
          onClick={startStopTimerBtnHandler}
          className={style["timer-countdown-btn"]}
        >
          RESTART
        </button>
      </div>
    </div>
  );
};

export default Timer;
