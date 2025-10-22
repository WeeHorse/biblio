import { bookMenu } from '../books.js';

export async function ourBooks() {

  const menuHTML = await bookMenu();

  return `
    <h2>Our books</h2>
    <nav>
      <a href="#responsibilities">Responsibilities by William Butler Yeats</a>
      ${menuHTML}
    </nav>
  `;
}