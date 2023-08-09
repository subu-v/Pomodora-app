import React from "react";
import style from "./Tabbed.module.scss";

const Tabbed = () => {
  const tabClickHandler = (event) => {

    // This handler function works because of the EVENT PROPAGATION'S BUBBLING PHASE, i have to check which element is being clicked by the user, if not checked, if the clicked element let's say is the <ul>, then the event.target will be <ul> and the class "tabbed-button-active" will be added to that element, this disrupts the UI.
    if (
      event.target.classList.contains(`${style["tabbed-ul"]}`) ||
      event.target.classList.contains(`${style["tabbed"]}`)
    )
      return;

    // Removing the class "tabbed-button-active" from the all the three elements first whenever a button is clicked helps in removing the styles from the previously selected active button
    document.querySelectorAll(`.${style["tabbed-button"]}`).forEach((btn) => {
      btn.classList.remove(`${style["tabbed-button-active"]}`);
    });

    // Add the active class with the neccessary styles to the button element that is being clicked by the user.
    event.target.classList.add(`${style["tabbed-button-active"]}`);
  };
  return (
    <React.Fragment>
      <nav onClick={tabClickHandler} className={style["tabbed"]}>
        <ul className={style["tabbed-ul"]}>
          <li>
            <button
              className={`${style["tabbed-button"]} ${style["tabbed-button-active"]}`}
            >
              pomodoro
            </button>
          </li>
          <li>
            <button className={`${style["tabbed-button"]}`}>short break</button>
          </li>
          <li>
            <button className={`${style["tabbed-button"]}`}>long break</button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Tabbed;
