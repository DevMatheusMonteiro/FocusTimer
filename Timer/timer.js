import state from "./state.js";
import * as elements from "./elements.js";
import { dendenmushi } from "./sounds.js";

export function countdown() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  seconds--;
  elements.controls.querySelector(".ph-plus-circle").disabled = true;
  elements.controls.querySelector(".ph-minus-circle").disabled = true;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    dendenmushi.currentTime = 0;
    dendenmushi.play();

    pomodoro();
    return;
  }

  updateDisplay(minutes, seconds);

  setTimeout(() => countdown(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}

export function pomodoro() {
  let minutes;

  if (state.focus) {
    if (state.counter < 3) {
      minutes = state.shortRestMinutes;
      elements.controls.querySelector(".ph-plus-circle").disabled = true;
      elements.controls.querySelector(".ph-minus-circle").disabled = true;
      state.counter++;
    } else {
      minutes = state.longRestMinutes;
      state.counter = 0;
      elements.controls.querySelector(".ph-plus-circle").disabled = true;
      elements.controls.querySelector(".ph-minus-circle").disabled = true;
    }
    state.focus = false;
  } else {
    minutes = state.minutes;
    elements.controls.querySelector(".ph-plus-circle").disabled = false;
    elements.controls.querySelector(".ph-minus-circle").disabled = false;
    state.focus = true;
  }
  updateDisplay(minutes, null);
  state.isRunning = elements.root.classList.remove("running");
}
