// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

///------------------------------ NAVIGATION ------------------------------///
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

///------------------------------ IMPORTS ---------------------------------///
import testAudioPlay from './views/testAudioPlay'
import createTC from './views/createTC';
import TrackView from './views/trackView';
import HomeStack from './views/Create';
import DreamStack from './views/DayDream';
import organizeScreen from './views/Organize';

///------------------------------ NAVIGATORS ------------------------------///
const LandingTabNav = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <LandingTabNav.Navigator
        initialRouteName="Create"
        tabBarOptions={{
          activeBackgroundColor: '#d9d7d7',
          activeTintColor: '#00316e',
          inactiveTintColor: '#000000'
        }}
      >
        <LandingTabNav.Screen name="-Audio-" component={ testAudioPlay }/>
        <LandingTabNav.Screen name="-TC-" component={ createTC }/>
        {/* <LandingTabNav.Screen name="-TrackView-" component={ TrackView }/> */}
        <LandingTabNav.Screen name="Daydream" component={ DreamStack }/>
        <LandingTabNav.Screen name="Create" component={ HomeStack }/>
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
