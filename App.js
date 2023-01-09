import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const todoInputHandler = (enteredText) => {
    setEnteredTodoText(enteredText);
  };

  const addTodoHandler = () => {
    setTodos((currentTodos) => [...currentTodos, enteredTodoText]);
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
        {todos.map((todo, index) => (
          <Text key={`${todo}-${index}`}>{todo}</Text>
        ))}
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
});
