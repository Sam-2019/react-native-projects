import React from "react";
import { View } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
  let listTodos;

  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case "All":
        return todos;
      case "Complete":
        return todos.filter((todo) => todo.complete);
      case "Active":
        return todos.filter((todo) => !todo.complete);
    }
  };

  listTodos = getVisibleTodos(todos, type);
  
  listTodos = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    );
  });

  return <View>{listTodos}</View>;
};

export default TodoList;
