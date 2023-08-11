import { React, useState, useRef, useEffect } from "react";
import style from "./Timer.module.scss";

const Timer = () => {
  let startTime = 1;
  let [totalTimeInSecs, setTotalTimeInSecs] = useState(startTime * 60);
  const startPomodora = useRef(null);
  const startStopBtn = useRef(null);

  const timeCalculation = () => {
    if (totalTimeInSecs === 0) clearInterval(startPomodora.current);

    const minutes = Math.floor(totalTimeInSecs / 60);
    const seconds = totalTimeInSecs % 60;

    document.querySelector(
      `.${style["timer-countdown-desc"]}`
    ).textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;

    setTotalTimeInSecs(totalTimeInSecs--);
  };

  useEffect(() => {
    startPomodora.current = setInterval(timeCalculation, 1000);
  }, []);

  const stop = (event) => {
    console.log(startStopBtn);
    if (event.target.innerText === "RESTART") {
      clearInterval(startPomodora.current);
      setTotalTimeInSecs(startTime * 60);
      event.target.innerText = "PAUSE";
    } else if (event.target.innerText === "PAUSE") {
      clearInterval(startPomodora.current);
      event.target.innerText = "RESTART";
    }
  };
  return (
    <div className={style["timer"]}>
      <div className={style["timer-outer"]}></div>
      <div className={style["timer-inner"]}>
        <div className={style["timer-progress-bar"]}></div>
      </div>
      <div className={style["timer-countdown"]}>
        <p className={style["timer-countdown-desc"]}>00:00</p>
        <button
          ref={startStopBtn}
          onClick={stop}
          className={style["timer-countdown-btn"]}
        >
          RESTART
        </button>
      </div>
    </div>
  );
};

export default Timer;
