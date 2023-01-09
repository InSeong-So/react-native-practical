import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  const startAddTodoHandler = () => {
    setModalIsVisible(true);
  };

  const endAddTodoHandler = () => {
    setModalIsVisible(false);
  };

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
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Todo" color="#b180f0" onPress={startAddTodoHandler} />
        <TodoInput
          visible={modalIsVisible}
          onAddTodo={addTodoHandler}
          closeAddTodo={endAddTodoHandler}
        />
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
    </>
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
