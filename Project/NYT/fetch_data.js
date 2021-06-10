const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

async function fetchBooks(list_name = LIST_NAME) {
  let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const resJSON = await res.json();
    return resJSON.results.books;
  } catch (error) {
    console.log(error);
  }
}

export default { fetchBooks: fetchBooks };
