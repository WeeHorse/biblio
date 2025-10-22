export async function bookMenu() {

  const response = await fetch('data/books.json');
  //console.log('response', response);
  const books = await response.json();
  //console.log('data', books);

  console.log(books);

  // generate a menu of books found in json
  let html = '';
  for (let book of books) {
    html += `<a href="${book.link}">${book.title} by ${book.author}</a>`;
  }


  return html;
}