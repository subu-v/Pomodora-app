import React from "react";
import styles from "./App.module.scss";
import Tabbed from "./UI/Tabbed";
import Timer from "./UI/Timer";
import Setting from "./UI/Setting";

const App = () => {
  window.addEventListener("load", (e) => {
    localStorage.clear();
  });
  return (
    <main className={styles.pomodora}>
      <div>
        <h1 className={styles["pomodora-h"]}>pomodoro</h1>
        <Tabbed></Tabbed>
        <Timer></Timer>
        <Setting></Setting>
      </div>
    </main>
  );
};

export default App;
