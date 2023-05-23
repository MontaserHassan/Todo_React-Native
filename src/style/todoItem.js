import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 20,
    },
    
    item: {
        flex: 1,
        paddingVertical: 10,
        color: 'white',
        fontSize: 16,
        borderColor: 'wheat',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
    },
    
    text: {
        fontSize: 18,
        color: 'white',
    },
    
    completedText: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    
    deleteButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 4,
        marginBottom: 8,
        marginLeft: 7,
    },
    
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    detailsButton: {
        backgroundColor: 'orange',
        padding: 8,
        borderRadius: 4,
        marginBottom: 8,
        marginLeft: 7,
    },

    detailsButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 4,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 4,
        marginBottom: 8,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
  
});