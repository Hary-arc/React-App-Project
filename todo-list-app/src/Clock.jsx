import React, { useState } from "react";

const Clock = () => {

    let newTime = new Date().toLocaleTimeString();
    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    const [ctime, setCtime] = useState(newTime);

    return(
        <div className="clockdiv">
        <h1 className="clock1">{ctime}</h1>
        <button className="clock" onClick={UpdateTime}>Click Me!</button>
        </div>

    );
}

export default Clock;