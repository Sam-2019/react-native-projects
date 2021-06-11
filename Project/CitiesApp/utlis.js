import { v4 as uuidv4 } from "uuid";

export const addKeysToBooks = (books) => {
  return books.map((book) => {
    return Object.assign({ key: uuidv4(), name: book });
  });
};
