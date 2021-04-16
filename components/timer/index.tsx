import { Button } from "antd";
import useInterval from "hooks/useInterval";
import { FC, useState } from "react";
import { atom, DefaultValue, selector, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import style from "./timer.module.sass";

const TimerState = atom({
    key: "timerState",
    default: 300,
})

type DisplayTimerStateType = {
    minute: number,
    second: number
}

const DisplayTimerState = selector<DisplayTimerStateType>({
    key: "displayTimerState",
    get: ({ get }) => {
        return {
            minute: Math.floor(get(TimerState) / 60),
            second: get(TimerState) % 60
        }
    }
})

const Timer: FC = () => {
    const [timerState, setTimerState] = useRecoilState(TimerState);
    const displayTimerState = useRecoilValue(DisplayTimerState);
    const reset = useResetRecoilState(TimerState);
    const [delay, setDelay] = useState(0);

    useInterval(() => {
        setTimerState(timerState - 1);
    }, delay)

    function handleStart() {
        if (delay) setDelay(0);
        else {
            setDelay(1000)
        }
    }

    return (
        <div>
            <div>
                <span className={style.largeFont}>{displayTimerState.minute}</span>m
                <span className={style.largeFont}>{displayTimerState.second}</span>s
            </div>
            <div className={style.toolbar}>
                <Button size="large" type="primary" onClick={handleStart}>Start</Button>
                <Button danger size="large" onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}

export default Timer