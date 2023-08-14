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

  setTimeout(() => countdown(), 0.01);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}

let minutes = state.minutes;
export function pomodoro() {
  console.log(elements.minutes.textContent);
  if (minutes >= state.minutes && state.counter < 4) {
    minutes = 5;
    elements.controls.querySelector(".ph-plus-circle").disabled = true;
    elements.controls.querySelector(".ph-minus-circle").disabled = true;
    console.log("Aqui dentro do < 4");
    state.counter++;
  } else if (minutes >= state.minutes && state.counter == 4) {
    minutes = 15;
    state.counter = 0;
    elements.controls.querySelector(".ph-plus-circle").disabled = true;
    elements.controls.querySelector(".ph-minus-circle").disabled = true;
    console.log("Aqui dentro do >= 4");
  } else {
    minutes = state.minutes;
    elements.controls.querySelector(".ph-plus-circle").disabled = false;
    elements.controls.querySelector(".ph-minus-circle").disabled = false;
  }

  state.isRunning = elements.root.classList.remove("running");
  updateDisplay(minutes, null);
  console.log("Fim " + state.counter);
}
