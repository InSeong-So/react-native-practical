import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function TodoItem({ id, text, onDeleteTodo }) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: '#4b08a2' }}
        onPress={onDeleteTodo.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  todoText: {
    color: 'white',
    padding: 8,
  },
});
