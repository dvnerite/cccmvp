import React, { useState } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppLoading from 'expo-app-loading';
///------------------------------ NAVIGATION ------------------------------///
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

///------------------------------ IMPORTS ---------------------------------///

import Main from './src/main';
import Create from './src/main/Create';
import daydreamScreen from './src/main/DayDream';
import organizeScreen from './src/main/Organize';
import createTC from './src/main/createTC';
import TvInfin from './src/main/TvInfin';
import TvEarth from './src/main/TvEarth'
import Cam from './src/main/Cam';
import Rec from './src/ex/Rec'
// import Save from './src/main/Save';

///------------------------------ NAVIGATORS ------------------------------///
// const LandingTabNav = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App () {

  //   const [ ready, setReady ] = useState(false);
    
  //   if (!ready) {
  //     return (
  //         <AppLoading
  //             startAsync={LoadClouds}
  //             onFinish={() => setReady(true)}
  //             onError={console.warn}
          
  //         />
  //     )
  // }



    // const initialClouds = [
    //       {
    //           title: 'my first cloud',
    //           thought: 'wow, this app is really cool - i love it! ',
    //           date: 'Mon, 19 Apr 2021 4:16PM',
    //           key: "1"
    //       },
    //       {
    //           title: 'my second cloud',
    //           thought: 'im gonna tell everybody about it',
    //           date: 'Mon, 19 Apr 2021 5:16PM',
    //           key: "2"
    //       },
    //       // {
    //       //     title: 'my third cloud',
    //       //     thought: 'i cant get enough!',
    //       //     date: 'Mon, 19 Apr 2021 6:16PM',
    //       //     key: "3"
    //       // }
    //   ]
      
    //       const [clouds, setClouds] = useState(initialClouds)

  return (

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Main' 
                          component={Main} 
                          options={{
                            headerTitle: () =>  <LogoTitle   />,
                            headerStyle: {
                              backgroundColor: '#00142d',
                              height: 120
                            },
                          }}
            // options={{headerShown:false}} 
                        />
            <Stack.Screen name='Create' 
                          component={Create} 
                          // clouds={clouds}
                          // setclouds={setClouds}
                          // options={{
                          //   headerTitle: () =>  <LogoTitle   />,
                          //   headerStyle: {
                          //     backgroundColor: '#133D69',
                          //     height: 120
                          //   },
                          // }}
            // options={{headerShown:false}} 
                        />
            <Stack.Screen name='Daydream' 
                          component={daydreamScreen} 
                          
                        />
            <Stack.Screen name='Organize' 
                          component={organizeScreen} 
                          // clouds={clouds}
                          // setclouds={setClouds}

                        />
            <Stack.Screen name='createTC' 
                          component={createTC} 
                          options={{
                          headerShown:false,
                          headerTitle: () =>  <LogoTitle   />,
                          headerBackTitleVisible: false,
                          headerStyle: {
                            backgroundColor: '#00142d',
                            height: 120
                            
                          }
                          }} 
                        />
             <Stack.Screen name='Infinite Daydream' 
                           component={TvInfin} 
                           options={{
                              headerTitle: () =>  <LogoTitle   />,
                              headerBackTitleVisible: false,
                              headerStyle: {
                                backgroundColor: '#00142d',
                                height: 120
                              },
                            }}
                        />
            <Stack.Screen name="Earth's Daydream" 
                          component={TvEarth}
                          options={{
                            headerTitle: () =>  <LogoTitle   />,
                            headerBackTitleVisible: false,
                            headerStyle: {
                              backgroundColor: '#00142d',
                              height: 120
                            },
                          }} 
                        />
           <Stack.Screen name='Cam' 
                         component={Cam} 
                        //  navigation={this.props.navigation}
                         options={{
                          headerTitle: () =>  <LogoTitle   />,
                          headerBackTitleVisible: false,
                          headerStyle: {
                            backgroundColor: '#00142d',
                            height: 120
                          },
                        }}
                        //  navigation={this.props.navigation}
                        
                        />
            {/* <Stack.Screen name='Save' 
                          component={Save}
                          options={{
                            headerTitle: () =>  <LogoTitle   />,
                            headerBackTitleVisible: false,
                            headerStyle: {
                              backgroundColor: '#00142d',
                              height: 120
                            },
                          }}

                        />  */}
            <Stack.Screen name='Rec' 
                          component={Rec}
                          options={{
                            headerTitle: () =>  <LogoTitle   />,
                            headerBackTitleVisible: false,
                            headerStyle: {
                              backgroundColor: '#00142d',
                              height: 120
                            },
                          }}

                        /> 
          </Stack.Navigator>
        </NavigationContainer>
  );
}




function LogoTitle () {
  return (
      // <View style={{ justifyContent: 'center', width: 100, height: 100}}>
      <Image 
          style={{ width: 80, height: 60, marginBottom: 20}}
          source={{
              uri: 'https://i.ibb.co/xCfqzh8/Logo-1.png'
              // require('./assets/splash.png')
          
          }}
      />
     
  )
}


// // firebase configuration 

// const firebaseConfig = {
//   apiKey: "AIzaSyA3JOLjPOgwM4R7wFtd_bWeRGS5jDdOwLk",
//   authDomain: "ccc-mvp.firebaseapp.com",
//   projectId: "ccc-mvp",
//   storageBucket: "ccc-mvp.appspot.com",
//   messagingSenderId: "674898792396",
//   appId: "1:674898792396:web:25d851f0ecc610b2c7d769",
//   measurementId: "G-B3V87QRLBE"
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore()

// export default db;


// if(!firebase.apps.length) {

