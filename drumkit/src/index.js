window.addEventListener("keydown", playSound);

function playSound(e) {
  const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audioElement) {
    const errorSound = document.getElementById("error");
    errorSound.currentTime = 0;
    return errorSound.play();
  }

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  audioElement.currentTime = 0;
  audioElement.play();
}

function playOnClick(key) {
  const event = { keyCode: key.dataset.key };
  playSound(event);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("click", () => playOnClick(key));
  key.addEventListener("transitionend", removeTransition);
});
