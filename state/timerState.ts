import { atom, selector } from "recoil";

export const StopWatchState = atom({
    key: "stopWatchState",
    default: 0
});

export const DisplayStopWatchSecond = selector({
    key: "stopWatchSecond",
    get: ({ get }) => Math.floor(get(StopWatchState) / 1000)
});

export const DisplayStopWatchMSecond = selector({
    key: "stopWatchMsecond",
    get: ({ get }) => get(StopWatchState) % 1000
})

export type DisplayTimerStateType = {
    minute: number,
    second: number
}

export const TimerState = atom({
    key: "timerState",
    default: 300,
})

export const DisplayTimerState = selector<DisplayTimerStateType>({
    key: "displayTimerState",
    get: ({ get }) => {
        return {
            minute: Math.floor(get(TimerState) / 60),
            second: get(TimerState) % 60
        }
    }
})