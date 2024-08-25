import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListView from './src/screens/components/list_view';
import DetailView from './src/screens/components/detail_view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component = {ListView} />
          <Stack.Screen name="Detail" component={DetailView} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
