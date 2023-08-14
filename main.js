import "./ToggleMode/index.js";
import { start } from "./Timer/index.js";
import state from "./Timer/state.js";

start(state.minutes, state.seconds);
