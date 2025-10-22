const player = new Audio();
let playing = false;

export function play(el) {
  console.log(el);
  const url = el.dataset.file;
  if (!playing) {
    player.src = url;
    player.play();
    el.textContent = 'pause';
    playing = true;
  } else {
    player.pause();
    el.textContent = 'play_arrow';
    playing = false;
  }

}