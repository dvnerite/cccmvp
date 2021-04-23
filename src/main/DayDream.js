import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Audio } from 'expo-av';

import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { Container, Header, Left, Body, Right, Title } from 'native-base';


const daydreams = {
    one: require('../asset/InfiniteDD.mp3'),
    two: require('../asset/EarthDD.mp3'),
    // three: require('../asset/jhene.mp3'),

  }

function daydreamScreen({ navigation }) {
    // const [isPlaying, isBuffering] = useState('false');
    // const [playbackInstance] = useState(null);
    // const [currentIndex] = useState(0);
    // const [volume] = useState(1.0);
    handlePlaySound = async track => {
        const soundObject = new Audio.Sound()
      
        try {
          let source = daydreams[track]
          await soundObject.loadAsync(source)
          await soundObject
            .playAsync()
            .then(async playbackStatus => {
              setTimeout(() => {
                soundObject.unloadAsync()
              }, playbackStatus.playableDurationMillis)
            })
            .catch(error => {
              console.log(error)
            })
        } catch (error) {
          console.log(error)
        }
        handleStopSound = async () => {
    
            await soundObject.stopAsync() 
      
          }
      }
      
   
    return (
        <View>
            <View style={{alignItems: 'center', marginTop: 0, marginBottom: 10}}>
                <Card style={{ width: 373, height: 115, justifyContent: 'center', alignItems: 'center', bottomBorderWidth: 1, bottomBorderColor: 'black'}}>
                    <Text style={{ padding: 60, fontSize: 20, fontWeight: '500', alignSelf: 'center' }}>Daydream Sessions</Text>
                </Card>
            </View>
            <ScrollView>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Card style={{ width: 365, paddingTop: 5,  alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 1}}>
                        <View style={{alignItems: 'center' }}>
                            <Card.Title style={{width: 200}} title="Infinite Daydream"></Card.Title>
                            <Card.Actions style={{ justifyContent: 'space-around', padding: 0}}>
                                <AntDesign.Button style={{ margin: 5 }} name='play' color="#00142d" backgroundColor="white" size={27} onPress={() => handlePlaySound('one')} >Play</AntDesign.Button>
                                <FontAwesome.Button style={{ margin: 5 }} name='stop-circle' color="#00142d" backgroundColor="white" size={30} onPress={() => handleStopSound()} >Stop</FontAwesome.Button>
                            </Card.Actions>
                        </View>
                    </Card>
                </View>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Card style={{ width: 365, paddingTop: 5,  alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 1}}>
                        <View style={{ alignItems: 'center' }}>
                            <Card.Title style={{width: 200}} title="Earth's Daydream"></Card.Title>
                            <Card.Actions style={{justifyContent: 'space-around'}}>
                                <AntDesign.Button style={{margin: 5}} name='play' color="#00142d" backgroundColor="white" size={27} onPress={() => handlePlaySound('two')} >Play</AntDesign.Button>
                                <FontAwesome.Button style={{margin: 5}} name='stop-circle' color="#00142d" backgroundColor="white" size={30} onPress={() => handleStopSound()} >Stop</FontAwesome.Button>
                            </Card.Actions>  
                        </View> 
                    </Card>
                </View>
            </ScrollView>
        </View>
    )
  }



export default daydreamScreen;


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