function PlayMusic() {
  let music = document.getElementById("music");
  music.play();
}
function PauseMusic() {
  let music = document.getElementById("music");
  music.pause();
}

export { PlayMusic, PauseMusic };
