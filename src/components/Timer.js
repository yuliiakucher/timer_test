import React, {useEffect, useState} from 'react'


const Timer = ({time, setTime}) => {
    

    useEffect(() => {
        const interval = setInterval(() => {
            time ++
            setTime(time)
        }, 1000);
        return () => clearInterval(interval);
      }, []);
     
    return (
        <div>
            {time}
        </div>
    )
}

export default Timer