import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style/todoDetails';

const TodoDetails = ({ route }) => {

    console.log(route);
    const { todo } = route.params;
    console.log(todo);

    return (
    
        <View style={styles.container}>
        
            <Text style={styles.heading}>Title: {todo.title}</Text>
            <Text style={styles.description}>Description: {todo.description}</Text>
            <Text style={styles.status}>Status: {todo.completed.toString()}</Text>
        
        </View>
    );

}

export default TodoDetails;