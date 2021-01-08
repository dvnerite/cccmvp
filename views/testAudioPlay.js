import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

import { Audio } from 'expo-av'




const LifeElementalPlaylist = [
    {
        title: "Water's Daydream",
        author: "The Cloud Club Collective"
    },
    {
        title: "Earth's Daydream",
        author: "The Cloud Club Collective"
    },
    {
        title: "Fire's Daydream",
        author: "The Cloud Club Collective"
    },
    {
        title: "Air's Daydream",
        author: "The Cloud Club Collective"
        },
]


function testAudioPlay() {
    const [isPlaying] = useState(false);
    const [isBuffering] = useState(false);
    const [playbackInstance] = useState(null);
    const [currentIndex] = useState(0);
    const [volume] = useState(1.0);
    
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
            <View style={{alignItems: 'center', marginTop: 120}}>
                <Text>Player</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 120}}>
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                        <Ionicons name='ios-skip-backward' size={48} color='#444' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.control} onPress={() => alert('')} text="play">
                        {/* {this.isPlaying ? (
                        <Ionicons name='ios-pause' size={48} color='#444' />
                            ) : ( */}
                        <Ionicons name="ios-play-circle" size={48} color='#444' />
                     
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                        <Ionicons name='ios-skip-forward' size={48} color='#444' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default testAudioPlay;

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