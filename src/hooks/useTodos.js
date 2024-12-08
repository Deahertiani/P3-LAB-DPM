import { useState, useEffect } from 'react';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        console.log('Todo list initialized');
        return () => {
            console.log('Todo component unmounted');
        };
    }, []);

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    return { todos, newTodo, setNewTodo, addTodo };
};
