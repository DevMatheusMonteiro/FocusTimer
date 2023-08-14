import * as elements from "./elements.js";

elements.darkOrlight.addEventListener("click", () => {
  const dark = document.documentElement.classList.toggle("dark");

  let text = dark ? "Dark Mode Ativado" : "Dark Mode Desativado";
  elements.modeDescription.textContent = text;
});
