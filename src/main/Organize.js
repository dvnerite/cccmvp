import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppLoading from 'expo-app-loading';
// import * as SplashScreen from 'expo-splash-screen';



import createTC from './createTC';
import CtcModal from './CtcModal';
import Clouds from './Clouds';


// SplashScreen.preventAutoHideAsync();

const organizeScreen = () => {


    const initialClouds = [
    // {
    //     title: 'My First Cloud',
    //     thought: 'Welcome to the Cloud Club Mobile App!',
    //     date: 'Mon, 19 Apr 2021 4:16PM',
    //     key: "1"
    // },
    // {
    //     title: 'My Second Cloud',
    //     thought: "What's Currently On Your Mind?",
    //     date: 'Mon, 19 Apr 2021 5:16PM',
    //     key: "2"
    // },
    // {
    //     title: 'my third cloud',
    //     thought: 'i cant get enough!',
    //     date: 'Mon, 19 Apr 2021 6:16PM',
    //     key: "3"
    // }
]



    const [ ready, setReady ] = useState(false);


    const [clouds, setClouds] = useState(initialClouds)

        // modal visibility state hooks

    const [ modalVisible, setModalVisible ] = useState(false);
    const [ camModalVisible, setCamModalVisible ] = useState(false);
    // const [recModalVisible, setRecModalVisible] = useState(false);

        // cloud input value state hooks

    const [ cloudTitle, setCloudTitle ] = useState()
    const [ cloudText, setCloudText ] = useState('')

        // image picker hooks 
    const [selectedImage, setSelectedImage] = useState(selectedImage);




    // const LoadClouds = ( ) => {
    //     AsyncStorage.getItem("storedClouds").then(data => {
    //         if (data !== null) {
    //             setClouds(JSON.parse(data))
    //         }
    //     }).catch((error) => console.log(error));
    // }

    // if (!ready) {
    //     return (
    //         <AppLoading
    //             startAsync={LoadClouds}
    //             onFinish={() => setReady(true)}
    //             onError={console.warn}
            
    //         />
    //     )
    // }

    // function to add new clouds
    const handleAddCloud = (cloud) => {
        const newClouds = [...clouds, cloud];
        // setClouds(newClouds);
        // setModalVisible(false);

        AsyncStorage.setItem("storedClouds", JSON.stringify(newClouds)).then(() => {
            setClouds(newClouds);
            setModalVisible(false);
        }).catch(error => console.log(error));
    }

    // functions to trigger edits

    const [ cloudToBeEdited, setCloudToBeEdited ] = useState(null);


    const handleTriggerEdit = (item) => {
        setCloudToBeEdited(item);
        setModalVisible(true);
        setCloudTitle(item.title);
        setCloudText(item.thought);
        // alert('Edit triggered')
    }

    const handleEditCloud = (editedCloud) => {
        const newClouds = [...clouds];
        const cloudIndex = clouds.findIndex((cloud) => cloud.key === editedCloud.key);
        newClouds.splice(cloudIndex, 1, editedCloud);
        // setClouds(newClouds);
        // setCloudToBeEdited(null);
        // setModalVisible(false);    

        AsyncStorage.setItem("storedClouds", JSON.stringify(newClouds)).then(() => {
            setClouds(newClouds);
            setModalVisible(false);
            setCloudToBeEdited(null);

        }).catch(error => console.log(error));
    }

 
    return (
        <View>
            <StatusBar style="light"/>
            <View style={{alignItems: 'center', marginTop: 20, }}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>My Thought Clouds</Text>
                    <Clouds
                        clouds={clouds}
                        setClouds={setClouds}
                        handleTriggerEdit={handleTriggerEdit}
                    />
               <CtcModal 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    camModalVisible={camModalVisible}
                    setCamModalVisible={setCamModalVisible}
                    cloudTitle={cloudTitle}
                    setCloudTitle={setCloudTitle}
                    cloudText={cloudText}
                    setCloudText={setCloudText}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    handleAddCloud={handleAddCloud}
                    clouds={clouds}
                    handleTriggerEdit={handleTriggerEdit}
                    cloudToBeEdited={cloudToBeEdited}
                    setCloudToBeEdited={setCloudToBeEdited}
                    handleEditCloud={handleEditCloud}

            
               />
            </View>
        </View>
    )
}

export default organizeScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cloud: {
        position: 'relative',
        width: 300,
        padding: 20,
        paddingRight: 100,
        // borderTopWidth: 2,
        // borderTopColor: '#ededed',
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        borderRadius: 5
    },
    cloudTitleText: {
        fontWeight: 'bold',
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    cloudText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    cloudDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius: 20,
        height: 65
    },
    cloudDeleteText: {
        color: 'white',
    },
    modalAct: {
        width: 60,
        height: 60,
        backgroundColor: '#00142d',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    modalGrp: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 20
    }
  });