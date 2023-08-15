import * as elements from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = elements.root.classList.toggle("running");

  elements.error.classList.add("hide");
  sounds.buttonPress.play();
  timer.countdown();
}

export function resetTimer() {
  state.isRunning = elements.root.classList.remove("running");

  state.counter = 0;
  state.focus = true;
  elements.controls.querySelector(".ph-plus-circle").disabled = false;
  elements.controls.querySelector(".ph-minus-circle").disabled = false;
  elements.error.classList.add("hide");
  timer.updateDisplay();
}

export function addFiveMinutes() {
  if (state.minutes == 60) {
    state.error = true;
    elements.error.classList.remove("hide");
    elements.error.querySelector(".errorDescription").textContent =
      "Não pode ser acima de 60 minutos";
    return;
  }

  state.minutes += 5;
  state.shortRestMinutes += 5;
  state.longRestMinutes += 5;
  state.error = false;
  elements.error.classList.add("hide");
  sounds.buttonPress.play();
  timer.updateDisplay();
}

export function removeFiveMinutes() {
  if (state.minutes == 25) {
    state.error = true;
    elements.error.classList.remove("hide");
    elements.error.querySelector(".errorDescription").textContent =
      "Não pode ser abaixo de 25 minutos";
    return;
  }

  state.minutes -= 5;
  state.shortRestMinutes -= 5;
  state.longRestMinutes -= 5;
  state.error = false;
  elements.error.classList.add("hide");
  sounds.buttonPress.play();
  timer.updateDisplay();
}
