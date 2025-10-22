import { bookMenu } from '../books.js';

export async function ourBooks() {

  const menuHTML = await bookMenu();

  return `
    <h2>Our books</h2>
    <nav>
      <a href="#responsibilities"><span class="material-symbols-outlined">book_5</span> Responsibilities <em>by William Butler Yeats</em></a>
      ${menuHTML}
    </nav>
  `;
}