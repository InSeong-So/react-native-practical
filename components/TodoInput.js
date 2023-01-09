import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function TodoInput({ onAddTodo }) {
  const [enteredTodoText, setEnteredTodoText] = useState('');

  const inputTodoHandler = (enteredText) => {
    setEnteredTodoText(enteredText);
  };

  const addTodoHandler = () => {
    onAddTodo(enteredTodoText);
    setEnteredTodoText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Please input to your Todo"
        onChangeText={inputTodoHandler}
        value={enteredTodoText}
      />
      <Button title="Add Todo" onPress={addTodoHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
