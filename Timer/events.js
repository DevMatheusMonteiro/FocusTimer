import { controls, error } from "./elements.js";
import * as actions from "./actions.js";
import { dendenmushi } from "./sounds.js";

export function registerEvents() {
  controls.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });

  document.addEventListener("click", (e) => {
    dendenmushi.pause();
    const action = e.target.dataset.action;
    if (typeof actions[action] != "function") {
      error.classList.add("hide");
      return;
    }
  });
}
