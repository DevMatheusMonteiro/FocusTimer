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

  elements.controls.querySelector(".ph-plus-circle").disabled = false;
  elements.controls.querySelector(".ph-minus-circle").disabled = false;
  elements.error.classList.add("hide");
  timer.updateDisplay();
}

export function addFiveMinutes() {
  let minutes = Number(elements.minutes.textContent);
  minutes += 5;
  if (minutes > 60) {
    elements.error.classList.remove("hide");
    elements.error.querySelector(".errorDescription").textContent =
      "Não pode ser acima de 60 minutos";
    return;
  }

  elements.error.classList.add("hide");
  sounds.buttonPress.play();
  state.minutes = minutes;
  state.seconds = 0;
  timer.updateDisplay();
}

export function removeFiveMinutes() {
  let minutes = Number(elements.minutes.textContent);
  minutes -= 5;
  if (minutes < 25) {
    elements.error.classList.remove("hide");
    elements.error.querySelector(".errorDescription").textContent =
      "Não pode ser abaixo de 25 minutos";
    return;
  }

  elements.error.classList.add("hide");
  sounds.buttonPress.play();
  state.minutes = minutes;
  state.seconds = 0;
  timer.updateDisplay();
}
