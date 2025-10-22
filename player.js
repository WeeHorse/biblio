const player = new Audio();
let playing = false;

export function play(el) {
  console.log(el);
  const url = el.dataset.file;
  if (!playing) {
    player.src = url;
    player.play();
    playing = true;
  } else {
    player.pause();
    playing = false;
  }

}