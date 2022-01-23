import { useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import { resumeTask } from "../actions";

export const TaskTimer = (props) => {
  const [CurrentTime, setCurrentTime] = useState("");
  const [CurrentSEC, setCurrentSEC] = useState("");
  const [CurrentMIN, setCurrentMIN] = useState("");
  const [CurrentH, setCurrentH] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    let secound = props.sec;
    let minutes = props.min;
    let hours = props.hours;

    console.log(hours);

    if (!props.isPaused) {
      console.log(props.isPaused);

      console.log(secound);
      interval = setInterval(() => {
        if (secound < 60) {
          secound++;
        } else {
          secound = 0;
        }

        if (secound === 60) {
          minutes++;
          secound = 0;
          // console.log(minutes % 60);
        }

        if (minutes === 60) {
          hours++;
          minutes = 0;
          // console.log(minutes % 60);
        }

        dispatch(resumeTask(props.id, minutes, secound, hours));
        if (secound < 10) {
          setCurrentSEC(`0${secound}`);
        } else {
          setCurrentSEC(`${secound}`);
        }
        if (minutes < 10) {
          setCurrentMIN(`0${minutes}`);
        } else {
          setCurrentMIN(`${minutes}`);
        }
        if (hours < 10) {
          setCurrentH(`0${hours}`);
        } else {
          setCurrentH(`${hours}`);
        }
        setCurrentTime(`${CurrentH}:${CurrentMIN}:${CurrentSEC}`);
      }, 1000);
    } else {
      if (secound < 10) {
        setCurrentSEC(`0${secound}`);
      } else {
        setCurrentSEC(`${secound}`);
      }
      if (minutes < 10) {
        setCurrentMIN(`0${minutes}`);
      } else {
        setCurrentMIN(`${minutes}`);
      }
      if (hours < 10) {
        setCurrentH(`0${hours}`);
      } else {
        setCurrentH(`${hours}`);
      }
      setCurrentTime(`${CurrentH}:${CurrentMIN}:${CurrentSEC}`);

      console.log("STOP");
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    setCurrentTime,
    props.id,
    props.min,
    props.sec,
    props.hours,
    dispatch,
    props.isPaused,
    CurrentH,
    CurrentMIN,
    CurrentSEC,
  ]);

  return CurrentTime;
};

export const Total = (props) => {
  let Total;

  let totalsec = 0;
  let totalmin = 0;
  let totalhours = 0;
  for (let i = 0; i < props.sec.length; i++) {
    const element = props.sec[i];
    totalsec += element;
  }
  for (let i = 0; i < props.min.length; i++) {
    const element = props.min[i];
    totalmin += element;
    console.log(totalmin);
  }
  for (let i = 0; i < props.hours.length; i++) {
    const element = props.hours[i];
    totalhours += element;
    console.log(totalhours);
  }
  console.log(totalsec / 60 + " Sec");
  console.log((totalsec % 60) + " Sec");
  totalmin = totalmin + Math.floor(totalsec / 60);
  totalsec = totalsec % 60;

  if (totalsec < 10) {
    totalsec = `0${totalsec}`;
  }
  if (totalmin < 10) {
    totalmin = `0${totalmin}`;
  }
  if (totalhours < 10) {
    totalhours = `0${totalhours}`;
  }
  Total = `${totalhours}:${totalmin}:${totalsec}`;
  return Total;
};
