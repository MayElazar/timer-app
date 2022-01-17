import { Timer } from "easytimer.js";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { useState, useEffect } from "react";

const TaskTimer = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const [CurrentTime, setCurrentTime] = useState("00:00");

  /******************************* */
  //console.log(props);

  useEffect(() => {
    let interval;

    if (!props.isPaused) {
      console.log(props.isPaused);

      interval = setInterval(() => {
        setCurrentTime(moment(Date.now() - props.startTime).format("mm:ss"));
        //console.log(CurrentTime);
      }, 1000);
      //interval();
    } else {
      console.log("STOP");
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [props.isPaused, props.startTime]);

  return <div>{CurrentTime}</div>;
};

export default TaskTimer;
