import React, { useContext } from "react";
import { ThemeSwitcherContext } from "../context/ThemeSwitchContext";

function SwitchButton() {
  const { mode, setMode } = useContext(ThemeSwitcherContext);
  return (
    <div className="form-check form-switch" style={{ marginLeft: 20 }}>
      <input
        className="form-check-input"
        type="checkbox"
        id="customSwitchBtn"
        style={{ width: "4em", height: "25px", marginRight: 6 }}
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
        }}
      />{" "}
      <label
        className="form-check-label"
        htmlFor="customSwitchBtn"
        style={{ fontSize: "24px" }}
      >
        {mode === "dark" ? "🦉" : "🐥"}
      </label>
    </div>
  );
}

export default SwitchButton;
