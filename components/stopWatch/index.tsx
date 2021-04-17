import { Button } from "antd";
import useInterval from "hooks/useInterval";
import { FC, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { StopWatchState, DisplayStopWatchSecond, DisplayStopWatchMSecond } from "state/timerState";
import style from "./stopWatch.module.sass";

const StopWatch: FC = () => {
    const [stopWatchState, setStopWatchState] = useRecoilState(StopWatchState);
    const second = useRecoilValue(DisplayStopWatchSecond);
    const msecond = useRecoilValue(DisplayStopWatchMSecond)
    const reset = useResetRecoilState(StopWatchState);
    const [timeNow, setTimeNow] = useState(0);
    const [delay, setDelay] = useState<number | null>(null);

    useInterval(() => {
        setStopWatchState(Date.now() - timeNow);
    }, delay)

    function handleStart() {
        if (delay === null) {
            setDelay(0);
            setTimeNow(Date.now() - stopWatchState)
        }
        else {
            setDelay(null)
        }
    }

    function handleReset() {
        setDelay(null);
        reset();
    }

    return (
        <>
            <div>
                <span className={style.second}>{second}</span>s
                <span className={style.msecond}>{msecond}</span>
            </div>
            <div className={style.toolbar}>
                <Button size="large" type="primary" onClick={handleStart}>Start</Button>
                <Button danger size="large" onClick={handleReset}>Reset</Button>
            </div>
        </>
    )
}

export default StopWatch