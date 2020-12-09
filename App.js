import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

///------------------------------ NAVIGATION ------------------------------///
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

///------------------------------ COMPONENTS ------------------------------///
import createScreen from './components/createScreen';
import daydreamScreen from './components/daydreamScreen';
import organizeScreen from './components/organizeScreen';




const LandingTabNav = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>CCC MVP</Text>
    //   <StatusBar style="auto" />
    //   <Button title="Enter"></Button>
    // </View>
    <NavigationContainer>
      <LandingTabNav.Navigator>
        <LandingTabNav.Screen name="Daydream" component={ daydreamScreen }/>
        <LandingTabNav.Screen name="Create" component={ createScreen }/>
        <LandingTabNav.Screen name="Organize" component={ organizeScreen }/>
      </LandingTabNav.Navigator>
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
