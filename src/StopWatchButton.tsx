// import React, { useState } from 'react'
// import onStart from  '../src/App';
// import onStop from  '../src/App';
// import onReset from  '../src/App';
// import onLap from  '../src/App';


// export default function StopWatchButton(props: number) {
//     const {time} = props;
//     const [setTime] = useState<number>(0);
//     const [state, setState] = useState('');

//     const onStart = () => {
//         if (state === 'START'){
//             return;
//         } else {
//             setState('START');
//             const interval:any = setInterval(() => {
//             setTime((previousState:number) => previousState + 1);
//             }, 1000);
//         }
//       };
      
//       const onStop = () => {
//         if (state === 'STOP'){
//             return;
//         } else {
//             setState('STOP');
//             clearInterval(time);
//         }
//       };
      
//       const onReset = () => {
//         if (state === 'RESET'){ 
//             return;
//         } else {
//             setState('RESET');
//             setTime(0);
//             clearInterval(time);
//         }
//       };

//       const onLap = () => {

//       }

//     return(
//         <div>
//             <button onClick={onStart} type="button">Play</button>
//             <button onClick={onStop} type="button">Stop</button>
//             <button onClick={onReset} type="button">Reset</button>
//             <button onClick={onLap} type="button">Lap</button>
//         </div>
//     )
// }

import React, { useState } from 'react';

type Parameters = {
    setTime: (arg0: number)=> void,
    time: number,
    lapList: any
}


export default function StopWatchButton(parameters:Parameters) {
    const { setTime, lapList, time } = parameters;
    const [intervalId, setIntervalId] = useState<number>(0);

    const onPlay = () => {
        const interval = setInterval(() => {
            setTime((prev) => prev+1);
        }, 1000);
        setIntervalId(interval);
    }

    const onStop = () => {
        clearInterval(intervalId);
    }

    const onReset = () => {
        clearInterval(intervalId);
        setTime(0);
    }

    const onLap = () => {
        lapList(intervalId)
        lapList('')
    }

    return(
        <div className="stopwatch-controls-container">
            <button onClick={() => onPlay()} type="button">Play</button>
            <button onClick={onStop} type="button">Stop</button>
            <button onClick={onReset} type="button">Reset</button>
            <button onClick={onLap} type="button">Lap</button>
        </div>
    );
}
