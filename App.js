import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './assets/Screen01';
import Screen02 from './assets/Screen02';
import Screen03 from './assets/Screen03';
import Screen04 from './assets/Screen04';
const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Screen01">
         <Stack.Screen name="Screen01" component={Screen01} />
         <Stack.Screen name="Screen02" component={Screen02} />
         <Stack.Screen name="Screen03" component={Screen03} />
         <Stack.Screen name="Screen04" component={Screen04} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}


