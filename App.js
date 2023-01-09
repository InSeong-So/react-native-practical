import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (enteredTodoText) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random().toString() },
    ]);
  };

  const deleteTodoHandler = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={addTodoHandler} />
      <View style={styles.todoContainer}>
        <FlatList
          data={todos}
          renderItem={(todoMeta) => (
            <TodoItem
              id={todoMeta.item.id}
              text={todoMeta.item.text}
              onDeleteTodo={deleteTodoHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  todoContainer: {
    flex: 5,
  },
});
