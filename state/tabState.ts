import { atom, selector } from "recoil";

const tabIndexState = atom({
    key: "indexState",
    default: "0"
});

export { tabIndexState }