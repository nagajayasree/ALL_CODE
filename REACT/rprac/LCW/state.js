import React from 'react';

const useState = React.useState

function OurTime(){
    return(
        <>
        <TimeArea />
        </>
    )
}

function TimeArea(){
    const [theTime,setTheTime] = useState(new Date().toLocaleString())

    setTimeout(function(){
        setTheTime(new Date().toLocaleString())
    },1000)

return <p>The current time is {theTime}.</p>
}

export default OurTime;