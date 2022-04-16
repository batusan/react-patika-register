import React from "react";

import RegisterForm from "./RegisterForm";
import DarkModeButton from "./DarkModeButton";

function RightPanel() {
  return (
    <div id="rightPanel" className="flex transition-5">
      <div id="registerWrapper" className="flex column">
        <div id="registerTitle">
          <span className="font transition-5">Kayıt</span>
        </div>
        <RegisterForm />
      </div>
      <DarkModeButton />
    </div>
  );
}

export default RightPanel;
