import { useState } from "react";
import { Total } from "./Timer";

export default function TotalTime({ tasks }) {
  let secArr = [];
  let minArr = [];
  let houerArr = [];

  tasks.length > 0 &&
    tasks.map(
      (task) => (
        secArr.push(task.sec), minArr.push(task.min), houerArr.push(task.hours)
      )
    );
  if (secArr.length > 0) {
    return (
      <div className="totalTime">
        <p>Total tasks time:</p>

        <Total sec={secArr} min={minArr} hours={houerArr} />
      </div>
    );
  } else {
    return "";
  }
}
