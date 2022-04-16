import React from "react";
import DarkLightIcon from "../constants/DarkLightIcon";
import RegisterForm from "./RegisterForm";

function RightPanel() {
  return (
    <div id="rightPanel" className="flex">
      <div id="registerWrapper" className="flex column">
        <div id="registerTitle">
          <span className="font underline">Kayıt</span>
        </div>
        <RegisterForm />
      </div>
      <div id="darkMode">
        <DarkLightIcon />
      </div>
    </div>
  );
}

export default RightPanel;
