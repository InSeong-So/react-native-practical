import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';

export default function TodoInput({ visible, onAddTodo, closeAddTodo }) {
  const [enteredTodoText, setEnteredTodoText] = useState('');

  const inputTodoHandler = (enteredText) => {
    setEnteredTodoText(enteredText);
  };

  const addTodoHandler = () => {
    onAddTodo(enteredTodoText);
    setEnteredTodoText('');
    closeAddTodo();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/todo.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Please input to your Todo"
          onChangeText={inputTodoHandler}
          value={enteredTodoText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeAddTodo} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Todo" onPress={addTodoHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
