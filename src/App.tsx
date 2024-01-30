// import React, { useEffect, useState } from 'react'
// import StopWatchButton from './StopWatchButton';
// import StopWatch from './StopWatch';

// export default function App() {
//     const [timeInSeconds, setTimeInSeconds] = useState(0);
//     const [timeArray, setTimeArray] = useState<Array<number|string>>([]);
//     useEffect(() => {
//         setTimeArray(StopWatch(timeInSeconds));
//     }, [timeInSeconds]);

//     // const sec = Math.floor(time / 1000)
//     // const min = Math.floor(sec / 60)
//     // const hour = Math.floor(min / 60)
//     // const millis = (time % 1000).toString().padStart(3,"0")
//     // const seconds =  (sec % 60).toString().padStart(2,"0")
//     // const minutes =  (min % 60).toString().padStart(2,"0")
//     // const hours =  (hour % 24).toString().padStart(2,"0")

    

//     return(
//         <div>
//             <p id="hour">{timeArray[0]}</p>
//                 <span>:</span>
//                 <p id="minute">{timeArray[1]}</p>
//                 <span>:</span>
//                 <p id="second">{timeArray[2]}</p>
//             <StopWatchButton />
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import StopWatch from '../src/StopWatch';
import StopWatchButton from '../src/StopWatchButton';

export default function App() {
    const [time, setTime] = useState(0);
    const [lapList] = useState('');
    const [timeArray, setTimeArray] = useState<Array<number|string>>([]);

    useEffect(() => {
        setTimeArray(StopWatch(time));
    }, [time]);

    return(
        <><span id="hour">{timeArray[0]}
        </span><span>:</span><span id="minute">{timeArray[1]}</span><span>:</span><span id="second">{timeArray[2]}</span><p id="laps">{lapList}</p><StopWatchButton time={time} setTime={setTime} lapList={lapList} /></>    
    );
}
