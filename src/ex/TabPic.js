import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

import { Camera } from 'expo-camera';


const TabPic = () => {
    return (
    
        <View style={{alignItems: 'center', marginTop: 200}}>
            <Button style ={{ width: 250, borderRadius: 50 }}
                    title="Take Picture" 
                    mode="contained"
                    color="#194776">Take Picture
            </Button>
        </View>
    )
}



export default TabPic;


const styles = StyleSheet.create ({


})