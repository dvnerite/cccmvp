import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { Button, Image, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import {  Container, Header, Icon, Left, Body, Right } from 'native-base';
import { Card, IconButton } from 'react-native-paper';

// import { Camera } from 'expo-camera';
// import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';

// import Cam from './Cam';


// import { AntDesign } from '@expo/vector-icons';

// ModalButton = TouchableOpacity
// ModalContainer = View
// ModalView = View
// StyledInput = TextInput
// ModalAction = TouchableOpacity
// ModalActionGroup = View
// ModalIcon = View
// HeaderTitle = Text

const CtcModal = ({ modalVisible, 
                    setModalVisible, 
                    cloudTitle, 
                    setCloudTitle, 
                    cloudText, 
                    setCloudText, 
                    camModalVisible, 
                    setCamModalVisible, 
                    selectedImage, 
                    setSelectedImage,
                    handleAddCloud,
                    cloudToBeEdited,
                    setCloudToBeEdited,
                    handleEditCloud,
                    clouds
                }) => {

    const handleCloseModal = () => {
        setModalVisible(false);
        setCloudTitle("");
        setCloudText("")
        setCloudToBeEdited(null);
    }

    const handleSubmit = () => {

        if(!cloudToBeEdited) {
            handleAddCloud({
                title: cloudTitle,
                thought: cloudText,
                date: new Date().toUTCString(),
                key: `${(clouds[clouds.length-1] && parseInt(clouds[clouds.length -1].key) + 1) || 1 }`
            })

        } else {
            handleEditCloud({
                title: cloudTitle,
                thought: cloudText,
                date: cloudToBeEdited.date,
                key: cloudToBeEdited.key
            })
        }
        setCloudTitle("")
        setCloudText("")
        // alert("submitted");
    }

    // let openImagePickerAsync = async () => {
    //     let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    //     if (permissionResult.granted === false) {
    //         alert("Permission to access camera roll is required!");
    //         return;
    //     }

    // let pickerResult = await ImagePicker.launchImageLibraryAsync();
    //     console.log(pickerResult);

    //     if(!pickerResult.cancelled) {
    //         setSelectedImage( pickerResult.uri )
    //     }

    //     // setSelectedImage({ localUri: pickerResult.uri })
    // }

    // const handleUserImg = (useUri) => {
    //     setSelectedImage(useUri);
    // }


    return (
        <>
        <View style={styles.btnView}>
        <StatusBar style="light"/>


            <TouchableOpacity style={styles.modalBtn} onPress={() => {setModalVisible(true)}}>
                <Text style={styles.modalTxt}>New Thought Cloud +</Text>
            </TouchableOpacity>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            
            >
                <View style={styles.modalCont}>
                    <Header style={styles.modalHead}>
                        <Left>
                            {/* <Button title="BACK" onPress={handleCloseModal}/> */}
                            <TouchableOpacity style={{ margin: 15}}><Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}} onPress={handleCloseModal}>BACK</Text></TouchableOpacity>
                        </Left>
                        <Body>
                            <TextInput style={styles.titleInput}
                                placeholder=" Name Your Cloud . . ."
                                placeholderTextColor="#C0C0C0"
                                // clearButtonMode="always"
                                // autoFocus={true}
                                onChangeText={(text) => setCloudTitle(text)}
                                value={cloudTitle}
                                onSubmitEditing={handleSubmit}
                                />
                            <TouchableOpacity style={{marginTop: 10}} 
                                onPress={handleSubmit}
                            >
                                <Text style={{color: 'white', fontWeight: 'bold'}}> SAVE</Text>
                            </TouchableOpacity>
                        </Body>
                        <Right/>
                    </Header>


                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 0, marginTop: 15}}>                    
                        {/* <Text style={{marginTop: 15}}>
                        What Are You Thinking?
                        </Text> */}
                        <TextInput
                            style={styles.textInput}
                            multiline
                            placeholder='Start typing . . .'
                            // clearButtonMode="always"
                            onChangeText={cloudText => setCloudText(cloudText)}
                            value={cloudText}
                            onSubmitEditing={handleSubmit}
                            />
                    </View>


                    {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                       
                    {/* ++++++++++++++++++++ CAMERA MODAL ++++++++++++++++++++ */}
    
                        {/* <Modal
                        animationType='slide'
                        transparent={true}
                        presentationStyle="overFullScreen"
                        visible={camModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal Closed");
                        setCamModalVisible(!camModalVisible);
                        }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 22}}>
                                <View style={{margin: 20, backgroundColor: 'white', height: 550, width: 330, borderRadius: 20, padding: 35, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { 
                                width: 0, height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 20}}>
                                    <Cam/>
                                    <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: '#00142d', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => setCamModalVisible(!camModalVisible)}>
                                        <Text style={{ color: 'white', fontSize: 18 }}>Close Camera</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>      */}

                    
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++ CAMERA DISPLAY BLOCK ++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */} 

                {/* <View style={styles.container}>
                    {/* <Text>Image</Text> */}
                 {/* <Image source={{ uri: selectedImage }}
                   style={{ width: 150, height: 150, margin: 10 }}
                /> */} 
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* ++++++++++++++++++++++ RECORDING DISPLAY BLOCK ++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                        {/* <View style={{width: 150, height: 150, borderWidth: 1, borderColor: 'black', margin: 10 }}>
                        </View> */}
                {/* </View> */}

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* ++++++++++++++++++++++ CAMERA/GALLERY BUTTONS +++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                {/* <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 0, marginBottom: 40 }}>
                    <Card style={{  justifyContent: 'center', width: 100, height: 55, paddingTop: 5, alignItems: 'center', marginTop: 1, borderRadius: 10, marginRight: 50}}>
                        <IconButton
                            icon="camera"
                            onPress={() => 
                                // navigation.navigate('Cam')
                                setCamModalVisible(true)
                            }
                            />
                    </Card>
                    <Card style={{  justifyContent: 'center', width: 100, height: 55, paddingTop: 5, alignItems: 'center', marginTop: 1, borderRadius: 10}}>
                        <IconButton
                            icon="image-multiple"
                            onPress={
                                // () => 
                                // navigation.navigate('Cam')
                                openImagePickerAsync}
                                handleUserImg={handleUserImg}
                            />
                    </Card> */}
                    {/* <Card style={{  justifyContent: 'center', width: 100, height: 55, paddingTop: 5, alignItems: 'center', marginTop: 1, borderRadius: 10}}>
                        <IconButton
                            icon="record"
                            onPress={() => 
                                // navigation.navigate('Rec')
                                setRecModalVisible(true)

                            }
                            />
                    </Card> */}
                {/* </View> */}
                
                <View style={styles.modalGrp}>
                    <TouchableOpacity style={styles.modalAct} onPress={handleCloseModal}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>X</Text>
                    </TouchableOpacity>
                </View>



                </View>
            </Modal>
        </View>
        </>
    )
};

export default CtcModal;


const styles = StyleSheet.create ({

    btnView: {
        

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
    modalBtn: {
        width: 300, 
        height: 80, 
        bottom: 80,
        backgroundColor: '#E02B46',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderLeftColor: 'black',
        borderLeftWidth: 1

    },
    modalGrp: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 50,
        height: '50%'
    },
    modalTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    modalCont: {
        padding: 0,
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    modalHead: {
        width: 375,
        marginTop: 5, 
        marginBottom: 1, 
        backgroundColor: '#00142d', 
        marginRight: 10, 
        height: 75
    },
    titleInput: {
        // borderWidth: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderColor: 'gray',
        padding: 5,
        margin: 0,
        width: 200,
        // borderRadius: 10,
        color: 'white',
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center', 
        alignSelf: 'center'
    },
    textInput: {

        marginTop: 20, 
        height: 225, 
        width: 360, 
        borderColor: 'black', 
        borderWidth: 0, 
        borderRadius: 3, 
        fontSize: 15, 
        padding:20, 
        paddingTop:20, 
        paddingBottom: 0
    }

})