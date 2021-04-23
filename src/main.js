import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons'
///------------------------------ COMPONENTS ----------------------------------///
// import aud from './main/Aud';
// import Picker from './main/Picker'
// import createTC from './main/createTC';
// import Recording from './main/Recording'
// import Rec from './main/Rec';
import daydreamScreen from './main/DayDream';
import createScreen from './main/Create';
import organizeScreen from './main/Organize';


const Tab = createMaterialBottomTabNavigator();

export default function Main () {

  
        return ( 
            <Tab.Navigator initialRouteName="CREATE"  barStyle={{backgroundColor: '#00142d'}} shifting={true} >
                {/* <Tab.Screen name="Picker" component={Picker} /> */}
                {/* <Tab.Screen name="createTC" component={createTC} /> */}
                {/* <Tab.Screen name="Recording" component={Recording} /> */}
                {/* <Tab.Screen name="Rec" component={Rec} /> */}
                <Tab.Screen name="DAYDREAM" 
                            component={daydreamScreen} 
                            options={{ headerShown: false,
                                       tabBarIcon: ({color, size}) => (
                                           <MaterialCommunityIcons name="cloud" size={22} color={color}/>),
                                        tabBarColor: '#818181'
                                            }} />
                <Tab.Screen name="CREATE" 
                            component={createScreen} 
                            options={{ headerShown: false,
                                tabBarIcon: ({color, size}) => (
                                    <MaterialCommunityIcons name="home-plus" size={22} color={color}/>),
                                    tabBarColor: '#00142d'
                                     }} 
                            />
                <Tab.Screen name="ORGANIZE" 
                            component={organizeScreen} 
                            options={{ headerShown: false,
                                tabBarIcon: ({color, size}) => (
                                    <MaterialCommunityIcons name="view-list" size={22} color={color}/>),
                                    tabBarColor: '#818181'
                                     }} 
                            />
            </Tab.Navigator>
        )
    }