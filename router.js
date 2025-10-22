import { home } from './pages/home.js';
import { ourBooks } from './pages/our-books.js';
import { responsibilities } from './pages/books/responsibilities.js';


async function router() {
  console.log("routing to... " + location.hash);

  let page = location.hash.replace('#', '');

  switch (page) {
    case 'our-books':
      document.querySelector('main').innerHTML = await ourBooks();
      break;

    // books:
    case 'responsibilities':
      document.querySelector('main').innerHTML = responsibilities();
      break;

    case '': // home
      document.querySelector('main').innerHTML = home();
      break;
    default:
      document.querySelector('main').innerHTML = "<h2>Page not found 404</h2>";
  }



}

// "registered on load"
window.onload = router;  // samma som att kalla den direkt..  router();

// registered on change
window.onhashchange = router;

