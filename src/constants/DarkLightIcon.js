import React from "react";

function DarkLightIcon() {
  return (
    <svg
      width="48"
      height="48"
      onClick={() => {
        document.body.classList.toggle("dark-theme");
      }}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.551 48C33.9537 48 40.7147 44.632 45.1939 39.1133C45.8565 38.2969 45.134 37.1042 44.1099 37.2992C32.4659 39.5168 21.7729 30.5889 21.7729 18.8348C21.7729 12.0639 25.3974 5.83772 31.2883 2.48531C32.1964 1.96856 31.968 0.591844 30.9362 0.40125C29.4897 0.134525 28.0219 0.000219032 26.551 0C13.3033 0 2.55103 10.7354 2.55103 24C2.55103 37.2477 13.2864 48 26.551 48Z"
        fill="#3C3C3C"
      />
    </svg>
  );
}

export default DarkLightIcon;
