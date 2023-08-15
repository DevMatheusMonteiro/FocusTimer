export function stopOtherSounds(
  elements,
  elementProperty,
  sounds,
  soundProperty
) {
  for (const key in elements) {
    const element = elements[key];
    if (key != elementProperty) {
      element.classList.remove("bg-blue");
    }
  }

  for (const key in sounds) {
    const sound = sounds[key];
    if (key != soundProperty) {
      sound.pause();
      sound.currentTime = 0;
    }
  }
}
