import { useState } from "react";
import style from "./Setting.module.scss";
import Dialog from "./Dialog";

const Setting = (prop) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleClickDialogOpen = (e) => {
    setIsDialogOpen(!isDialogOpen);
  };

  const inputPomodora = (input) => {
    console.log(input);
  };

  return (
    <div className={style["setting"]}>
      <img
        onMouseEnter={(e) =>
          (e.target.src = "/assets/icon-settings-hovered.svg")
        }
        onMouseLeave={(e) => (e.target.src = "/assets/icon-settings.svg")}
        onClick={handleClickDialogOpen}
        className={style["setting-img"]}
        src="/assets/icon-settings.svg"
        alt=""
      />
      {isDialogOpen && (
        <Dialog
          handleClickDialogOpen={handleClickDialogOpen}
          propInputPomodora={inputPomodora}
        />
      )}
    </div>
  );
};

export default Setting;
