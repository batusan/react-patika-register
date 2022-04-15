import React from "react";
import DarkLightIcon from "../constants/DarkLightIcon";

function RightPanel() {
  return (
    <div id="rightPanel" className="flex">
      <div id="registerWrapper" className="flex column">
        <div>
          <span id="registerTitle" className="font underline">
            Kayıt
          </span>
        </div>
      </div>
      <div id="darkMode">
        <DarkLightIcon />
      </div>
    </div>
  );
}

export default RightPanel;
