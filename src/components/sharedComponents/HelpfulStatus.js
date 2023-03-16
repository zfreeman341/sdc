import React, { useState } from "react";
import Status from "./Status";
import Helpful from "../sharedComponents/Helpful";
import Report from "../sharedComponents/Report";

const HelpfulStatus = ({ handleHelpfulClick, handleReportClick }) => {
  const sharedClasses = "flex-initial";

  return (
    <Status
      className="helpfulStatus"
      sharedClasses={sharedClasses}
      children={[
        <Helpful
          key={1}
          yesCount={10}
          handleHelpfulClick={handleHelpfulClick}
          className={sharedClasses + " status"}
        />,
        <Report
          key={2}
          handleReportClick={handleReportClick}
          className={sharedClasses + " status"}
        />,
      ]}
    />
  );
};

export default HelpfulStatus;
