import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";

export const userTypedHook: TypedUseSelectorHook<RootState> = useSelector;
