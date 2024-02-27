import React, { useState } from "react";

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <p>
        {date.toDateString()}{" "}
        <span>{date.toLocaleTimeString()}</span>
      </p>
    </div>
  );
}

export default CurrentDate;
