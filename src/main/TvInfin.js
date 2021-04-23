import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';


const TvInfin = ({ navigation }) => {
    return (
        <View>
            <View style={{alignItems: 'center', marginTop: 1}}>
                <Card style={{ width: 405, paddingTop: 5,  alignItems: 'center'}}>
                    <Card.Title style={{ width: 400, marginLeft: 30 }} title="Infinite Daydream"></Card.Title>
                </Card>
            </View>
            <View>
                <Image 
                    style={{ height: 200, width: 390}}
                    source={{
                        uri: 'https://i.ibb.co/7JDCHGM/EarthDD.png'
                    }}
                />
            </View>
            {/* <View style={{alignItems: 'center', marginTop: 75}}>
            <Button style ={{ width:300, padding: 5, borderRadius: 50 }}
                    title="Create New Thought Cloud"
                    mode="contained"
                    color="#194776"
                    onPress={() => navigation.navigate("CreateTC")}
            >Create New Thought Cloud
            </Button>        
            </View> */}
            <View style={{alignItems: 'center', marginTop: 50}}>
            <Button style ={{ width:300, padding: 5, borderRadius: 50 }}
                    title="Create New Thought Cloud"
                    mode="contained"
                    color="#194776"
                    onPress={() => alert('')}
            >View Recent Thought Clouds
            </Button>
            <TouchableOpacity style={{marginTop: 30, backgroundColor: '#E02B46', width: 300, height: 175, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
                             onPress={ () => navigation.navigate('createTC')}>
                <Text style={{fontSize: 20, color: 'white'}}>
                    New Thought Cloud +
                </Text>
            </TouchableOpacity>        
            </View>
        </View>

    )
}

export default TvInfin;












///------------------------------ NAVIGATION --------------------------------///
// import { createStackNavigator} from '@react-navigation/stack';

///------------------------------ IMPORTS ----------------------------------///
// import createTC from './createTC';

///------------------------------ NAVIGATORS ------------------------------///
// const InfinNav = createStackNavigator();

// InfinStack();

// function InfinStack() {
//     return (
//         <InfinNav.Navigator>
//             <InfinNav.Screen 
//                 name="TvInfin"
//                 component={TvInfin}
//                 options={{
//                     // headerTitle: () =>  <LogoTitle   />,
//                     headerStyle: {
//                       backgroundColor: '#133D69',
//                       height: 120
//                     },
//                     headerTintColor: "#fff"
//                    }}
//             />
//             <InfinNav.Screen
//                 name="CreateTC"
//                 component={createTC}
//                 options={{
//                     // headerTitle: () =>  <LogoTitle   />,
//                     headerStyle: {
//                       backgroundColor: '#133D69',
//                       height: 120
//                     },
//                     headerTintColor: "#fff"
//                 }}
//             />
//         </InfinNav.Navigator>
//     )
// }