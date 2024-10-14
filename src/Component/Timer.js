import React, { useEffect, useState } from "react";

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([],{hour: '2-digit',minute:'2-digit'});
  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  );
}
export default Timer;