import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    
    description: {
        fontSize: 16,
        fontStyle: 'normal'
    },

    status: {
        fontSize: 16,
        color: 'gray',
        fontStyle: 'italic'
    }

});