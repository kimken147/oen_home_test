import { Button } from "antd";
import useInterval from "hooks/useInterval";
import { FC, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { TimerState, DisplayTimerState } from "state/timerState";
import style from "./timer.module.sass";

const Timer: FC = () => {
    const [timerState, setTimerState] = useRecoilState(TimerState);
    const displayTimerState = useRecoilValue(DisplayTimerState);
    const reset = useResetRecoilState(TimerState);
    const [delay, setDelay] = useState<number | null>(null);

    useInterval(() => {
        setTimerState(timerState - 1);
    }, delay)

    function handleStart() {
        if (delay !== null) setDelay(null);
        else {
            setDelay(1000)
        }
    }

    function handleReset() {
        setDelay(null);
        reset();
    }

    return (
        <div>
            <div>
                <span className={style.largeFont}>{displayTimerState.minute}</span>m
                <span className={style.largeFont}>{displayTimerState.second}</span>s
            </div>
            <div className={style.toolbar}>
                <Button size="large" type="primary" onClick={handleStart}>Start</Button>
                <Button danger size="large" onClick={handleReset}>Reset</Button>
            </div>
        </div>
    )
}

export default Timer