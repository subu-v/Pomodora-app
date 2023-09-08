import { React, useState, useRef, useEffect } from "react";
import style from "./Timer.module.scss";

const Timer = () => {
  // setTime variable will contain the total time the pomodora should run.
  const setTime = 1;
  // When you multiply the given minutes by 60, it wll give how many seconds are there in the given minutes, so totalSetTimeInSecs contains the setTime in seconds.
  const totalSetTimeInSecs = useRef(setTime * 60);
  // restartPauseTimerBtn is used to retrieve the DOM node button element that is used to restart and pause the pomodora app.
  const restartPauseTimerBtn = useRef(null);
  // this ref will contain the setInterval that is being used to run the timer, the reason for using a ref to store the setInterval is, the setInterval will run for every passed time argument which should be in milliseconds, this will keep on running unless you said it to stop, so to stop, you need pass the variable that has the consequent setInterval to the clearInterval()
  const startPomodoraInterval = useRef(null);
  // hiddenSemiCircle is a ref that used just to manipulate the opacity value of the element it is referenced to.
  const hiddenSemiCircle = useRef(null);
  // This state is a flag which indicates the timer is currently running if its value are true and not running if false.
  const [restartPauseTimerFlag, setRestartPauseTimerFlag] = useState(false);

  // timeCalculation is the function that is being used as the callback function to the setInterval method and it will keep on executing for every second.
  const timeCalculation = () => {
    // The progressBars is an array of two semicircle elements cause querySelectorAll() returns a NodeList of elements that has the passed className or id or element name.
    const progressBars = document.querySelectorAll(
      `.${style["timer-progress-bar"]}`
    );
    // If the totalSetTimeInSecs.current is 0, then the pomodora timer is completed and when the pomodora timer is completed certain things needs to be set to its default values, what its values were before the timer started running.
    if (totalSetTimeInSecs.current === 0) {
      // You need to reset totalSetTimeInSecs.current ref to the value it was before the timer started running.
      totalSetTimeInSecs.current = setTime * 60;
      // Timer is completed, user should be able to restart the timer again.
      restartPauseTimerBtn.current.textContent = "RESTART";
      // If the button which is being used to start and pause the timer, if its textContent is "Restart", then the button width should be able to accommodate the textContent "RESTART" in it, cause in this stage the button width will be something that helps to fit the textContent "PAUSE" in it, now the textContent is 'RESTART' so you need to change the width.
      restartPauseTimerBtn.current.style.width = "159px";

      // As the timer is completed, in order for the first progress bar(square) to be visible, the hidden semicircle should have the opacity of 0
      hiddenSemiCircle.current.style.opacity = 0;
      // The second progressbar(square) should also be at its default place, right after a timer is completed, the second progress bar is at from 0deg to 180deg, in order to have a full progress in the beginning, the second should be rotated 180deg.
      progressBars[1].style.rotate = "180deg";
      // As the timer is not running currently, the restartPauseTimerFlag state should be false.
      setRestartPauseTimerFlag(false);
    }

    // In order to show the minutes, totalSetTimeInSecs are divided by 60 cause 1min = 60secs, for example, if you have total of 600seconds, dividing by 60 will give 10mins and Math.floor() gives the rounded largest less than integer or equal to the number it is returned from the calculation.
    const minutes = Math.floor(totalSetTimeInSecs.current / 60);
    // You also have to show how many seconds are remaining right, the modulus operator will divide the totalSetTimeInSecs by 60 and will return the remainder.
    const seconds = totalSetTimeInSecs.current % 60;
    // The progressbar have to rotate in accordance with the timer, you have to get some kind of relatable value in order for the progress to rotate.
    // Have the (remaining time in seconds) divide it by (total given time in seconds) and multiple by 360, this will give some value, with it you can use it to rotate the progress bar.
    // As the totalSetTimeInSecs keeps on decreases, the angle will also be decreased.
    const angle = (totalSetTimeInSecs.current / (setTime * 60)) * 360;

    // As long as the angle value is greater than 180, the first progress bar alone should be rotated cause the timer is still not crossed the half mark stage.
    if (angle >= 180) {
      // Assigning the angle value to the rotate style property in deg will make the  first progressbar(square) rotate.
      progressBars[0].style.rotate = `${angle}deg`;
    } else {
      // Now half of the time is complated and the value of the angle is less than 180.
      // There are two progress bar elements, first is at 0deg, second one is at 180deg,
      // Basically how the progress bar should work is that, it should rotate from 0deg and stop at 360deg, one full 360deg rotation for one pomodora timer. But here without this hiddenSemicircle.
      // Now when half of the timer is completed, the first progress bar will be rotated 180deg and the second progress bar is already rotated 180deg initially, now both the progress bar elements will start to rotate from the 180deg simultaneously.
      progressBars[0].style.rotate = `${angle}deg`;
      progressBars[1].style.rotate = `${angle}deg`;
      // As it starts to rotate, it will cross the 0deg mark without this hiddenSemiCircle, as both the progress starts to rotate from 180deg, it will cross the 0deg mark again and rotates towards the 180deg mark and it is visible in the UI.
      // Making the opacity of the hiddenSemiCircle to 1 will make sure both the rotating progress bars are not visible as it crosses the 0deg mark again for a single pomodora timer.
      hiddenSemiCircle.current.style.opacity = 1;
    }

    // Assinging the minutes and seconds values as textContent, the reason ternary operator being used is because as the timer reaches single digit time for minutes and seconsds, the textContent should have preceding 0.
    document.querySelector(
      `.${style["timer-countdown-desc"]}`
    ).textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    // Decrementing the totalSetTimeInSecs by 1 for each passing second.
    totalSetTimeInSecs.current--;
  };

  const restartPauseTimerBtnHandler = () => {
    // When the button with the className "timer-countdown-btn" is clicked, this        function executes. What happens inside the handler function?

    // 1. First it checks if the textContent of the button is 'RESTART', if so,
    if (restartPauseTimerBtn.current.textContent === "RESTART") {
      // a. The timer is not running currently, its either paused or completed, then you need to reset to its initial set time right? so you multiply the initial set time in seconds and assign it to the "totalSetTimeInSecs" ref.
      totalSetTimeInSecs.current = setTime * 60;

      // b. Setting setRestartPauseTimerFlag to true, re-renders the current component, but before doing so will execute the remaining statements(lines of code below).
      setRestartPauseTimerFlag(true);

      // c. When you clicked "RESTART", the timer is started, then another action you can perform on a timer is to pause, so the button with the ref "restartPauseTimerBtn", using this ref to change its textContent to "PAUSE".
      restartPauseTimerBtn.current.textContent = "PAUSE";

      // d. Now the button textContent is "PAUSE", so you have to changes it width, because "RESTART" had bigger width and having the same width to the btn element when its textContent is changed will make the btn position not centered on the horizontal axis.
      restartPauseTimerBtn.current.style.width = "112px";

      // Else if the clicked event emitted button's textContent is "PAUSE", then
    } else if (restartPauseTimerBtn.current.textContent === "PAUSE") {
      // a. Setting setRestartPauseTimerFlag to false, re-renders the current component, but before doing so will execute the remaining statements(lines of code below).
      setRestartPauseTimerFlag(false);

      // b. Now the button is clicked when it's textContent is "PAUSE", so the timer will be paused, the next reasonable action for a timer is a way again to restart the timer right? That's why the button's textContent is set back to "RESTART"
      restartPauseTimerBtn.current.textContent = "RESTART";

      // c. Button's textContent currently is "RESTART", its text 7 letters is bigger than the "PAUSE" 5 letters, so you have to increase the button's width in order for it align centered horizontally.
      restartPauseTimerBtn.current.style.width = "159px";
    }
  };

  // The callback function of this useEffect will run on the mount(for the first initial render) and run if the restartPauseTimerFlag state value is changed compared to its previous value.
  useEffect(() => {
    // If the restartPauseTimerFlag is true, then the setInterval method will run, this check is mandatory for one reason, without this check, if you just defined the setInterval method, for every render of this component whenever the dependencies are chanaged, the call function will be called withit executing the setInterval method which cause the timer to run irrespective of whether the user click pause or during the initial render as well.
    if (restartPauseTimerFlag)
      // The value of the restartPauseTimerFlag is true, then the startPomodoraInterval ref current value is assigned to setInerval() with timeCalculation as its callback function and this function will run for every second cause 1000 millisecond is 1 second
      startPomodoraInterval.current = setInterval(timeCalculation, 1000);
    // This cleanup callback function will be called whenever the component re-renders and the component is removed from the screen (unmount), what the callback function does is that, it clears the setInterval that was running before the component re-rendered.
    // Let's say you clicked "RESTART" btn, the setInterval method is executed and the timer is running, now you clicked "PAUSE", now without the clearInterval method, the previously running setInterval will not be stopped cause the timer will keep on running because the setInterval is not cleared, it will keep on running. Now if you clicked 'RESTART' again, a new setInterval will also be running with the already running setInterval method, this will cause inconsistent UI changes.
    return () => clearInterval(startPomodoraInterval.current);
  }, [restartPauseTimerFlag]);

  return (
    <div className={style["timer"]}>
      <div className={style["timer-outer-circle"]}></div>

      <div className={style["timer-inner-circle"]}>
        {/* How these two elements are set, Both the childs are square, the reason they are looking like circles is because of the overflow:hidden property set on there parent and infact if you remove any one of the child, they will look like a semicircle, only because of rotate:180deg set to the last-child, when both together they look like a circle. */}
        <div className={style["timer-progress-bar"]}></div>
        <div className={style["timer-progress-bar"]}></div>
      </div>

      <div
        ref={hiddenSemiCircle}
        className={style["timer-hidden-semicircle"]}
      ></div>

      <div className={style["timer-countdown"]}>
        <p className={style["timer-countdown-desc"]}>00:00</p>
        <button
          ref={restartPauseTimerBtn}
          onClick={restartPauseTimerBtnHandler}
          className={style["timer-countdown-btn"]}
        >
          RESTART
        </button>
      </div>
    </div>
  );
};

export default Timer;
