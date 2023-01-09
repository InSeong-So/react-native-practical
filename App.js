import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const todoInputHandler = (enteredText) => {
    setEnteredTodoText(enteredText);
  };

  const addTodoHandler = () => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please input to your Todo"
          onChangeText={todoInputHandler}
        />
        <Button title="Add Todo" onPress={addTodoHandler} />
      </View>
      <View style={styles.todoContainer}>
        <FlatList
          data={todos}
          renderItem={(todoMeta) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{todoMeta.item.text}</Text>
            </View>
          )}
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  todoContainer: {
    flex: 5,
  },
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  todoText: {
    color: 'white',
  },
});
