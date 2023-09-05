import React from "react";
import styles from "./App.module.scss";
import Tabbed from "./UI/Tabbed";
import Timer from "./UI/Timer";
import Modal from "./UI/Modal";

const App = () => {
  return (
    <main className={styles.pomodora}>
      <div>
        <h1 className={styles["pomodora-h"]}>pomodoro</h1>
        <Tabbed></Tabbed>
        <Timer></Timer>
        <Modal></Modal>
      </div>
    </main>
  );
};

export default App;
