import { sounds } from "./elements.js";
import * as actions from "./actions.js";

export function registerEvents() {
  sounds.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}
