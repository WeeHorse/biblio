import { play } from '../../player.js';

window.play = play;

export function responsibilities() {

  return `
  <article>
    <section>
      <h3>Responsibilities</h3>
      <h4>by William Butler Yeats</h4>
      <img src="https://archive.org/download/responsibilities_2510_librivox/responsibilities_2510.jpg">
      <p>LibriVox recording of Responsibilities by William Butler Yeats.
        Read in English by Kazbek.
        Responsibilities is a collection of poetry by W.B. Yeats, originally published in 1914 together with a play. The 1916 edition used for this recording combines them with some poems from The Green Helmet and Other Poems.
      </p>      
    </section>
    <section>
      <h4>Chapters</h4>
      <ol>
        <li>Introductory Rhymes <span class="play-pause material-symbols-outlined" data-file="https://archive.org/download/responsibilities_2510_librivox/responsibilities_01_yeats_128kb.mp3" onclick="play(this)">play_arrow</span></li>
        <li>The Grey Rock <span class="play-pause material-symbols-outlined" data-file="https://archive.org/download/responsibilities_2510_librivox/responsibilities_02_yeats_128kb.mp3" onclick="play(this)">play_arrow</span></li>
      </ol>
    </section>
  </article>
  `;
} 