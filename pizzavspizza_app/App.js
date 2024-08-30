import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import ListView from './src/screens/components/list_view';
import ListView from './src/screens/components/function_list_view.js';
import DetailView from './src/screens/components/detail_view';

import AddPizzeria from "./src/screens/drawer/AddPizzeria.js";
import RegForm from "./src/screens/drawer/RegForm.js";
import LoginForm from './src/screens/drawer/LoginForm.js';

import TabOne from './src/screens/tabs/tab1.js';
import TabTwo from './src/screens/tabs/tab2.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


renderTabComponents = () => (
  <Tab.Navigator>
    <Tab.Screen name='Tab 1' component={TabOne} />
    <Tab.Screen name='Tab 2' component={TabTwo} />
  </Tab.Navigator>
)

renderScreenComponents = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component = {ListView}/>
    <Stack.Screen name="Detail" component={DetailView}/>
    <Stack.Screen name='Tabs' children={this.renderTabComponents} />
  </Stack.Navigator>
);


export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" children={this.renderScreenComponents} />
        <Drawer.Screen name="AddPizzeria" component = {AddPizzeria} />
        <Drawer.Screen name="RegForm" component = {RegForm} />
        <Drawer.Screen name="LoginForm" component = {LoginForm}ScreenC />
      </Drawer.Navigator>
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
