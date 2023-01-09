import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (enteredTodoText) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={addTodoHandler} />
      <View style={styles.todoContainer}>
        <FlatList
          data={todos}
          renderItem={(todoMeta) => <TodoItem text={todoMeta.item.text} />}
          keyExtractor={(item) => item.key}
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
