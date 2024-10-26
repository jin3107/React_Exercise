import { useEffect, useState } from "react";

function Content() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <p>Thời gian hiện tại: {time}</p>
        </>
    )
}

export default Content