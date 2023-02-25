import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "./screens/header";
import ViewButton from "./screens/viewbutton"
import ViewToken from './screens/viewtoken';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Display" component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View>
      <Header />
      <ViewButton navigation={navigation} />
    </View>
  );
}

function Display() {
  return(
    <View>
      <Header />
      <ViewToken />
    </View>
  );
}

export default App;


