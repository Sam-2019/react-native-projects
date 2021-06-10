import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BookItem from "./BookItem";
import fetchBooks from "./fetch_data";

const mockBooks = [
  {
    rank: 1,
    title: "GATHERING PREY",
    author: "John Sandford",
    book_image:
      "https://prodimage.images-bn.com/pimages/9780698152519_p0_v2_s1200x630.jpg",
  },
  {
    rank: 2,
    title: "MEMORY MAN",
    author: "David Baldacci",
    book_image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Memory_Man_by_David_Baldacci.jpg/220px-Memory_Man_by_David_Baldacci.jpg",
  },
];

const data = [
  { key: "a" },
  { key: "b" },
  { key: "c" },
  { key: "d" },
  { key: "a longer example" },
  { key: "e" },
  { key: "f" },
  { key: "g" },
  { key: "h" },
  { key: "i" },
  { key: "j" },
  { key: "k" },
  { key: "l" },
  { key: "m" },
  { key: "n" },
  { key: "o" },
  { key: "p" },
];
const Main = () => {
  // const [info] = useState(data);
  const [books, setBooks] = useState([]);

  const addKeysToBooks = (books) => {
    return books.map((book) => {
      return Object.assign(book, { key: book.title });
    });
  };

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    fetchBooks.fetchBooks().then((books) => {
      //  setBooks(addKeysToBooks(books));
      //setBooks(books);
    });
  };

  // const renderItem = ({ item }) => {
  //   return <Text style={styles.row}>{item.key}</Text>;
  // };

  let view;

  const renderItem = ({ item }) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      />
    );
  };

  if (!books.length) {
    view = <Text>No Data</Text>;
  } else {
    view = <FlatList data={books} renderItem={renderItem} />;
  }

  return (
    <View style={styles.container}>
      {view}

      {/* <FlatList data={info} renderItem={renderItem} /> */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  row: {
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
});
