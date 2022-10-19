import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar(props) {
  const { name, value } = props;
  return (
    <>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: "var(--header-color)",
          textColor: "var(--header-color)",
        })}
      />
    </>
  );
}
