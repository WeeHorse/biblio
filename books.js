// we need to handle the data loading so we can use it in more than one function 
// without the need to load it each time
let loadedBooks = null;

async function loadBooks() {
  if (!loadedBooks) { // load them if we don't already have them
    const response = await fetch('data/books.json');
    //console.log('response', response);
    loadedBooks = await response.json();
    //console.log('data', books);    
  }
  return loadedBooks;
}

export async function bookMenu() {
  const books = await loadBooks(); // get books if we don't already have them
  // generate a menu of books found in json
  let html = '';
  for (let book of books) {
    html += `<a href="#books/${book.link}"><span class="material-symbols-outlined">book_5</span>${book.title} <em>by ${book.author}</em></a>`;
  }
  return html;
}

export async function showBook(url) {
  const books = await loadBooks(); // get books if we don't already have them
  const bookUrl = url.replace('books/', '');
  // find the book we want to show
  for (let book of books) {
    if (book.link == bookUrl) {
      return renderBook(book);
    }
  }
}

function renderBook(book) {

  let audioChaptersHtml = '';
  for (let audio of book.audio) {
    audioChaptersHtml += `<li>${audio.name} (${audio.duration} mins)<span class="play-pause material-symbols-outlined" data-file="${audio.src}" onclick="play(this)">play_arrow</span></li>`;
  }

  return `
    <article>
      <section>
        <h3>${book.title}</h3>
        <h4>by ${book.author}</h4>
        <img src="${book.img}">
        <p>${book.synopsis}</p>      
      </section>
      <section>
        <h4>Chapters</h4>
        <ol>
          ${audioChaptersHtml}
        </ol>
      </section>
    </article>
  `;

}