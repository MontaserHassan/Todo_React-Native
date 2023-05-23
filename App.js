import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoApp from '../firstLab/src/components/todoApp';
import TodoDetails from './src/components/todoDetails';


const Stack = createNativeStackNavigator();


const App = () => {
  
  return (

    <NavigationContainer>

      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={TodoApp} />

        <Stack.Screen name="TodosDetails" component={TodoDetails} />
      
      </Stack.Navigator>
    
    </NavigationContainer>

  );

};

export default App;