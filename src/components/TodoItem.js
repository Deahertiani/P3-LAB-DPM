import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default TodoItem;
