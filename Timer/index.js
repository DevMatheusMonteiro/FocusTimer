import { registerEvents } from "./events.js";
import { updateDisplay } from "./timer.js";
import state from "./state.js";

export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  updateDisplay();

  registerEvents();
}
