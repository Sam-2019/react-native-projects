import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import Heading from "./Heading";
import Input from "./TextInput";
import Button from "./Button";
import TodoList from "./TodoList";
import TabBar from "./TabBar";

const MainApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [type, setType] = useState("All");

  function InputChange(inputValue) {
    setInputValue(inputValue);
  }

  function submitTodo() {
    if (inputValue.match(/^\s*$/)) {
      return;
    }

    const todo = {
      title: inputValue,
      todoIndex: uuidv4(),
      complete: false,
    };

    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setInputValue("");
  }

  function DeleteTodo(todoIndex) {
    const FilteredTodos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    setTodos(FilteredTodos);
  }

  function ToggleComplete(todoIndex) {
    let todosData = todos;

    todosData.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });

    setTodos(todosData);
  }

  function SetType(type) {
    setType(type);
  }

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={(text) => InputChange(text)}
        />
        <TodoList
          todos={todos}
          deleteTodo={DeleteTodo}
          toggleComplete={ToggleComplete}
        />
        <Button submitTodo={submitTodo} />
      </ScrollView>

      <TabBar type={type} setType={setType} />
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
