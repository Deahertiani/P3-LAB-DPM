import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';
import { useTodos } from '../hooks/useTodos';

const TodoScreen = () => {
    const { todos, newTodo, setNewTodo, addTodo } = useTodos();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Daftar Belanja</Text>
            <TextInput
                style={styles.input}
                value={newTodo}
                onChangeText={setNewTodo}
                placeholder="Tambahkan Catatan"
            />
            <Button title="Tambahkan" onPress={addTodo} />
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <TodoItem text={item} />}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    list: {
        marginTop: 10,
    },
});

export default TodoScreen;
