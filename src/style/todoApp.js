import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'black',
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: 'wheat',
        textAlign: 'center',
    },
    
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 16,
        borderRadius: 10,
        paddingLeft: 30,
    },

    secContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
    },

    button: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 4,
        marginBottom: 8,
        marginTop: 10,
        textAlign: 'center',
        alignItems: 'center',
        width: 500,
    },
    
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    divider: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 8,
        marginBottom: 8,
    },
    
    filterButtons: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    
    filterButton: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#007bff',
        borderRadius: 4,
        marginRight: 8,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    
    activeFilterButton: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'gray',
        borderRadius: 4,
        marginRight: 8,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },

});