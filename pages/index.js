import TimerTab from "components/timerTab";
import style from "./index.module.sass";

export default function Home() {
    return (
        <div className={style["home-container"]}>
            <TimerTab />
        </div>
    )
}
