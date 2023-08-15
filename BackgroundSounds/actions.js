import state from "./state.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";
import { stopOtherSounds } from "./utils.js";

export function forestSound() {
  state.musicOn = elements.forestButton.classList.toggle("bg-blue");
  sounds.forest.play();

  if (state.musicOn == false) {
    sounds.forest.pause();
    sounds.forest.currentTime = 0;
  }

  stopOtherSounds(elements, "forestButton", sounds, "forest");
}

export function rainSound() {
  state.musicOn = elements.rainButton.classList.toggle("bg-blue");
  sounds.rain.play();

  if (state.musicOn == false) {
    sounds.rain.pause();
    sounds.rain.currentTime = 0;
  }

  stopOtherSounds(elements, "rainButton", sounds, "rain");
}

export function coffeeShopSound() {
  state.musicOn = elements.coffeeShopButton.classList.toggle("bg-blue");
  sounds.coffeeShop.play();

  if (state.musicOn == false) {
    sounds.coffeeShop.pause();
    sounds.coffeeShop.currentTime = 0;
  }

  stopOtherSounds(elements, "coffeeShopButton", sounds, "coffeeShop");
}

export function fireplaceSound() {
  state.musicOn = elements.fireplaceButton.classList.toggle("bg-blue");
  sounds.fireplace.play();

  if (state.musicOn == false) {
    sounds.fireplace.pause();
    sounds.fireplace.currentTime = 0;
  }

  stopOtherSounds(elements, "fireplaceButton", sounds, "fireplace");
}
