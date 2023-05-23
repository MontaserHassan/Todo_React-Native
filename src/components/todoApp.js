import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from '../components/todoItem';
import { styles } from "../style/todoApp";

const TodoApp = () => {
    
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    saveTodos();
  }, [todos]);


  const addTodo = () => {
    if (title !== '' && description !== '') {
      setTodos([...todos, { id: Date.now(), title, description, completed: false }]);
      setTitle('');
      setDescription('');
    }else{
      alert('Error', 'Title and description fields cannot be empty.');
      setTitle('');
      setDescription('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const renderTodo = ({ item }) => {
    if (filter === 'All' || (filter === 'Active' && !item.completed) || (filter === 'Done' && item.completed)) {
      return <TodoItem todo={item} onToggle={() => toggleTodo(item.id)} onDelete={() => deleteTodo(item.id)} />;
    }
    return null;
  };

  return (

    <View style={styles.container}>
    
      <Text style={styles.heading}>TODO APP</Text>
      
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Title" />

      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Description" />
      
      <View style={ styles.secContainer }>

        <TouchableOpacity style={styles.button} onPress={addTodo}>
        
          <Text style={styles.buttonText}>Add Todo</Text>
        
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.filterButtons}>
        
        <Text style={filter === 'All' ? styles.activeFilterButton : styles.filterButton} onPress={() => setFilter('All')}> All </Text>

        <Text style={filter === 'Active' ? styles.activeFilterButton : styles.filterButton} onPress={() => setFilter('Active')}> Active </Text>

        <Text style={filter === 'Done' ? styles.activeFilterButton : styles.filterButton} onPress={() => setFilter('Done')} > Done </Text>
      
      </View>

      <View style={styles.secContainer}>
      
        <FlatList data={todos} renderItem={renderTodo} keyExtractor={(item) => item.id.toString()} />
      
      </View>
      
    </View>
  
  );
};

export default TodoApp;