import React, { FC } from "react";
import style from "./timerTab.module.sass";
import { tabIndexState } from "state/tabState";
import { useRecoilState } from "recoil";
import { Tabs } from "antd";
import Timer from "components/timer";
import StopWatch from "components/stopWatch";

const TimerTab: FC = () => {
    return (
        <div className={style["timer-container"]}>
            <Tabs defaultActiveKey="1" centered >
                <Tabs.TabPane tab="TIMER" key="1">
                    <Timer />
                </Tabs.TabPane>
                <Tabs.TabPane tab="STOPWATCH" key="2">
                    <StopWatch />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default TimerTab