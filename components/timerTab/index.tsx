import React, { FC } from "react";
import style from "./timerTab.module.sass";
import { tabIndexState } from "state/tabState";
import { useRecoilState } from "recoil";
import { Tabs } from "antd";
import Timer from "components/timer";

const TimerTab: FC = () => {
    const [tabIndex, setTabIndex] = useRecoilState(tabIndexState);

    const handleChange = (key: string) => {
        setTabIndex(key);
    }

    return (
        <div className={style["timer-container"]}>
            <Tabs defaultActiveKey="1" onChange={handleChange} centered >
                <Tabs.TabPane tab="TIMER" key="1">
                    <Timer />
                </Tabs.TabPane>
                <Tabs.TabPane tab="STOPWATCH" key="2">
                    Content 2
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default TimerTab