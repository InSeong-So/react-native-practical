import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function TodoItem({ id, text, onDeleteTodo }) {
  return (
    <Pressable onPress={onDeleteTodo.bind(this, id)}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
