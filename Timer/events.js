import { controls } from "./elements.js";
import * as actions from "./actions.js";
import { dendenmushi } from "./sounds.js";
import state from "./state.js";

export function registerEvents() {
  controls.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });

  document.addEventListener("click", () => {
    dendenmushi.pause();
  });
}

export function resetCounter() {
  controls.querySelector(".ph-stop-circle").addEventListener("click", () => {
    state.counter = 0;
    console.log("Reset Counter " + state.counter);
  });
}
