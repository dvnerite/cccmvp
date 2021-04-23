import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { Button, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';


const image = { uri: 'https://i.ibb.co/85JcYdS/cccbackgrnd.png' }

 const createScreen  = ({navigation}) => {
 

    return (
        <View style={styles.container}>
            
            <StatusBar style="light"/>
            <ImageBackground source={image} style={{height: '100%'}}>
           
            <View style={styles.topPrompt}>
                {/* <Text style={styles.welText}>Welcome to Cloud Club Collective</Text> */}
                <Card style={styles.card}>
                <Text style={styles.text}>Get Lost In A DayDream Session . . .</Text>
                    <TouchableOpacity style={styles.btn} 
                                      onPress={() => navigation.navigate('DAYDREAM')}
                    > 
                        <Text style={styles.btnText}>
                        ← Daydream Sessions
                        </Text>
                    </TouchableOpacity> 
                </Card>
              
            </View>
            <View style={styles.bottomPrompt}>
                <Card style={styles.card}>
                <Text style={styles.text}>Or, Create Your First Thought Cloud!</Text>
                    <TouchableOpacity style={styles.btn}
                                    onPress={() => navigation.navigate('ORGANIZE')}
                    >
                        <Text style={styles.btnText}>
                         Thought Clouds →
                        </Text>
                    </TouchableOpacity>                
                </Card>
                </View>
            </ImageBackground>
        </View>
    )
}


export default createScreen;


const styles = StyleSheet.create({
   
    container: {
        flex: 1
    },
    btn: {
        backgroundColor: '#E02B46',
        width: 300, 
        height: 50, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        borderLeftColor:'black', 
        borderLeftWidth: 1
    },
    card: {
        width: 350,
        height: 150,
        borderRadius: 19,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderLeftColor: 'gray',
        borderLeftWidth: 1,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#00142d', 
        opacity: .90
    },
    btnText: {
        fontSize: 20, 
        color: 'white', 
        fontWeight: 'bold'
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    topPrompt: {
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomPrompt: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18, 
        fontWeight: '500', 
        marginBottom: 20
    },
    welText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Kailasa',
        marginBottom: 15
    }

  });
