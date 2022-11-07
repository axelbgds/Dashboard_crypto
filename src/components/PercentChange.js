import React, { useEffect, useState } from "react";
import colors from "../styles/_settings.scss";

// props.percent
const PercentChange = ({ percent }) => {
  const [color, SetColor] = useState();

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        SetColor(colors.green1);
      } else {
        SetColor(colors.red1);
      }
    } else {
      SetColor(colors.white1);
    }
  }, [percent]);

  return (
    <div>
      <p className="percent-change-container" style={{ color }}>
        {/* Keep 1 number after , */}
        {percent ? percent.toFixed(1) + "%" : "-"}
      </p>
    </div>
  );
};

export default PercentChange;
