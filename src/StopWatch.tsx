// import React from 'react'
// // import hours from '../src/App'
// // import minutes from '../src/App'
// // import seconds from '../src/App'
// // import millis from '../src/App'

// export default function StopWatch(time: number): (number | string)[] {
//     let hours:number = Math.floor(time / 3600);
//     let minutes:number = Math.floor((time - (hours * 3600)) / 60);
//     let seconds:number = time - (hours * 3600) - (minutes * 60);
    
//     return [
//         hours,
//         minutes,
//         seconds
//         // hours < 10 ? `0${hours}` : hours,
//         // minutes < 10 ? `0${minutes}` : minutes,
//         // seconds < 10 ? `0${seconds}` : seconds
//     ];
// }
export default function StopWatch(timeInSeconds: number): (number | string)[] {
    let hours:number = Math.floor(timeInSeconds / 3600);
    let minutes:number = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds:number = timeInSeconds - (hours * 3600) - (minutes * 60);
    
    return [
        hours < 10 ? `0${hours}` : hours,
        minutes < 10 ? `0${minutes}` : minutes,
        seconds < 10 ? `0${seconds}` : seconds
    ];
}
