/*
start ,stop ,reset<0>
*/

import { useEffect, useState } from "react";

function StopWatch() {
  const [isStoped, setIsStoped] = useState(true);
  const [k, setK] = useState(0); //times we have started and stopped the timmer

  //tracking depedencies
  useEffect(() => {
    if (isStoped === false) {
      setK(k + 1);
    }
  }, [isStoped]);

  return (
    <div>
      <div>
        <button onClick={() => setIsStoped(false)}>Start</button>
        <button onClick={() => setIsStoped(true)}>Stop</button>
      </div>
      <div>Start clicked how many times {k}</div>
      <ShowTimmer isStoped={isStoped} k={k} />
    </div>
  );
}

function ShowTimmer({ isStoped, k }) {
  if (isStoped) {
    return null;
  }

  return <Timmer k={k} />;
}

function Timmer({ k }) {
  const [time, setTime] = useState(0);

  //born
  //interval
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("for k is", k, "time is ", time);
      setTime((c) => c + 1);
      //previous state
    }, 1000);
    //memory leakage
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <b>{time}</b>
    </div>
  );
}

export default StopWatch;