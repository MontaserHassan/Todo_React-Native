import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal   } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style/todoItem";

const TodoItem = ({ todo, onToggle, onDelete }) => {

  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);


  const navigateToDetails = () => {
    navigation.navigate("TodosDetails", { todo });
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    setShowModal(false);
    onDelete();
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.item}>
        <Text style={todo.completed ? styles.completedText : styles.text}>
          {todo.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToDetails} style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}> Go To Detail </Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="fade">

        <View style={styles.modalContainer}>
        
          <View style={styles.modalContent}>
        
            <Text style={styles.modalText}> Are you sure you want to delete? </Text>
            
            <View style={styles.modalButtonsContainer}>
            
              <TouchableOpacity style={styles.modalButton} onPress={confirmDelete}>
                
                <Text style={styles.modalButtonText}>Confirm</Text>
              
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.modalButton} onPress={cancelDelete}>
              
                <Text style={styles.modalButtonText}>Cancel</Text>
              
              </TouchableOpacity>
            
            </View>
          
          </View>
        
        </View>
      
      </Modal>
    
    </View>
  
  );

};

export default TodoItem;
