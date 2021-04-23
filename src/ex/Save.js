import React, {useState} from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore")
require("firebase/firebase-storage")


export default function Save(props) {
    console.log(props.route.params.image);

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `cloud/${Math.random().toString(36)}`
        console.log(childPath);

        const response = await fetch(uri)
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob)

        const taskProgress = snapshot => {
            console.log(`transferrred: ${snapshot.bytesTransferred}`)
        }


        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }
    return (
        <View style={{flex: 1}}>
            {/* <Text>Save Screen</Text> */}
            <Image source={{uri: props.image}} style={{flex:1, alignItems: 'center', justifyContent: 'center', resizeMode: 'contain', resizeMode: 'contain', height: 100, width: 200}}/>
            <Button title="Save" onPress={() => uploadImage()} />
        </View>
    )
}