import React, { useEffect, useState } from "react";

import LoadingIcon from "../constants/Icons/loading-tea.gif";

function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && (
        <div id="loadingScreen">
          <img src={LoadingIcon} alt="" />
        </div>
      )}
    </>
  );
}

export default Loader;
