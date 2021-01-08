import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Card, Button } from 'react-native-paper';

///------------------------------ NAVIGATION --------------------------------///
import { createStackNavigator} from '@react-navigation/stack';

///------------------------------ IMPORTS ----------------------------------///
import createTC from './createTC';
import TvWater from './TvWater';
import TvEarth from './TvEarth';
import TvFire from './TvFire';
import TvAir from './TvAir';

///------------------------------ NAVIGATORS ------------------------------///
const DreamNav = createStackNavigator();

DreamStack();

function DreamStack() {

    return(
            <DreamNav.Navigator mode="modal">
                <DreamNav.Screen 
                    name="DayDream" 
                    component={daydreamScreen} />
                <DreamNav.Screen 
                    name="CreateTC" 
                    component={createTC} />
                <DreamNav.Screen 
                    name="Water's Daydream" 
                    component={TvWater} />
                <DreamNav.Screen 
                    name="Earth's Daydream" 
                    component={TvEarth} />
                <DreamNav.Screen 
                    name="Fire's Daydream" 
                    component={TvFire} />
                <DreamNav.Screen 
                    name="Air's Daydream" 
                    component={TvAir} />
            </DreamNav.Navigator>
    )
}

// const LifeElementalPlaylist = [
//     {
//         title: "Water's Daydream",
//         author: "The Cloud Club Collective"
//     },
//     {
//         title: "Earth's Daydream",
//         author: "The Cloud Club Collective"
//     },
//     {
//         title: "Fire's Daydream",
//         author: "The Cloud Club Collective"
//     },
//     {
//         title: "Air's Daydream",
//         author: "The Cloud Club Collective"
//         },
// ]

function daydreamScreen({ navigation }) {


    // const [isPlaying, isBuffering] = useState('false');
    // const [playbackInstance] = useState(null);
    // const [currentIndex] = useState(0);
    // const [volume] = useState(1.0);
    
    return (
        <View>
            <Container>
            <Header>
            <Left/>
            <Body>
            <Title>CloudClub</Title>
            </Body>
            <Right />
            </Header>
        </Container>
        <View style={{alignItems: 'center', marginTop: 70}}>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Daydream Sessions</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>LIFE ELEMENTAL</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
               <Card.Title style={{width: 400}} title="Water's Daydream">Card Title</Card.Title>
               <Card.Actions >
                   <Button color="#194776"
                           onPress={ () => navigation.navigate('CreateTC')}
                   >Create</Button>
                   <Button color="#194776">Play</Button>
                   <Button color="#194776"
                           onPress={ () => navigation.navigate("Water's Daydream")} 
                   >Enter</Button>
               </Card.Actions>
            </Card>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
            <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
               <Card.Title style={{width: 400}} title="Earth's Daydream">Card Title</Card.Title>
               <Card.Actions >
                   <Button color="#194776"
                           onPress={ () => navigation.navigate('CreateTC')} 
                   >Create</Button>
                   <Button color="#194776">Play</Button>
                   <Button color="#194776"
                           onPress={ () => navigation.navigate("Earth's Daydream")}
                   >Enter</Button>
               </Card.Actions>
            </Card>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
            <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
               <Card.Title style={{width: 400}} title="Fire's Daydream">Card Title</Card.Title>
               <Card.Actions >
                   <Button color="#194776"
                           onPress={ () => navigation.navigate('CreateTC')} 
                   >Create</Button>
                   <Button color="#194776">Play</Button>
                   <Button color="#194776"
                           onPress={ () => navigation.navigate("Fire's Daydream")} 
                   >Enter</Button>
               </Card.Actions>
            </Card>
        </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
          <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
             <Card.Title style={{width: 400}} title="Air's Daydream">Card Title</Card.Title>
             <Card.Actions >
                 <Button color="#194776"
                         onPress={ () => navigation.navigate('CreateTC')}                      
                 >Create</Button>
                 <Button color="#194776">Play</Button>
                 <Button color="#194776"
                         onPress={ () => navigation.navigate("Air's Daydream")}
                 >Enter</Button>
             </Card.Actions>
          </Card>
      </View>
      </View>
    )
  }



export default DreamStack;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      controls: {
        flexDirection: 'row'
    },
      control: {
        margin: 20
      }
  });