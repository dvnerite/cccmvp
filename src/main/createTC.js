import React, { useState, useEffect } from 'react';
import { Alert, Button, FlatList, Modal, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput,TouchableOpacity, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {  Container, Content, Footer, FooterTab, Header, Icon, Left, Body, Right, Tab, Tabs, Title} from 'native-base';
import { Card, IconButton } from 'react-native-paper';
// import RNDrawOnScreen from 'react-native-draw-on-screen';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

// import AsyncStorage from '@react-native-async-storage/async-storage'

///------------------------------ COMPONENTS ----------------------------------///

// import ImageCom from './Image';
// import Recording from './Recording';


<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <createTC/>
</TouchableWithoutFeedback>


const createTC = ({navigation}) => {

            // *********** MODAL HOOKS *********** //
            const [camModalVisible, setCamModalVisible] = useState(false);
            const [recModalVisible, setRecModalVisible] = useState(false);
                // *********** CLOUD HOOKS *********** //
            const [cloudTitle, setCloudTitle] = useState('');
            const [cloudText, setCloudText] = useState('');
            const [clouds, setClouds] = useState([]);
            const [value, setValue] = useState('');
            // *********** PICKER HOOKS *********** //
            const [selectedImage, setSelectedImage] = useState(selectedImage);


    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if(!pickerResult.cancelled) {
            setSelectedImage( pickerResult.uri )
        }

        // setSelectedImage({ localUri: pickerResult.uri })
    }
        // if (selectedImage !== null) {
        //     return (
        //     <View style={{flex: 1, alignContent: 'center', alignItems: 'center', }}>
        //         <View style={{height: '100%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderColor: '#133D69' , borderWidth: 10, height: '50%'}}>
        //             <Image
        //                 source={{ uri: selectedImage.localUri}}
        //                 style={{ width: 300,
        //                         height: 200,
        //                         resizeMode: 'contain'
        //                     }}
        //                 />
        //                 <Button title="Go to Create TC" onPress={() => navigation.navigate('createTC')}></Button>
        //         </View>
        //     </View>
        //     )
        // }


    const handleUserImg = (useUri) => {
            setSelectedImage(useUri);
        }

    const handleSubmit = () => {

        }

        return (

            <Container style={{flex: 1, justifyContent: 'center', height: '20%' , position: 'relative'}}>
                <Header style={{marginTop: 5, marginBottom: 1, backgroundColor: '#00142d', marginRight: 10, height: 75}} >
                    <Left>
                        <Button title="BACK" onPress={() => navigation.goBack()}/>
                    </Left>
                    <Body>
                        <TextInput style={styles.input}
                            placeholder=" Name Your Cloud . . ."
                            placeholderTextColor="#C0C0C0"
                            // clearButtonMode="always"
                            onChangeText={cloudTitle => setCloudTitle(cloudTitle)}
                            value={cloudTitle}
                            onSubmitEditing={handleSubmit}
                            />
                        <TouchableOpacity style={{marginTop: 10}} 
                                  onPress={ () =>   console.log(cloudTitle, cloudText)}
                            >
                            <Text style={{color: 'white'}}> SAVE</Text>
                        </TouchableOpacity>
                        {/* <Button title="GET" onPress={getValue}></Button> */}
                    </Body>
                    <Right/>
                </Header>
                {/* <Card style={{ width: 412, paddingTop: 5, alignItems: 'center'}}>
                    <Card.Title style={{ width: 400 }} title="Track Title"></Card.Title>
                </Card> */}
                <ScrollView>                
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 0, marginTop: 15}}>                    
                        {/* <Text style={{marginTop: 15}}>
                        What Are You Thinking?
                        </Text> */}
                        <TextInput
                            style={{ marginTop: 20, height: 225, width: 360, borderColor: 'black', borderWidth: 0, borderRadius: 3, fontSize: 15, padding:20, paddingTop:20, paddingBottom: 0}}
                            multiline
                            placeholder='Start typing . . .'
                            // clearButtonMode="always"
                            onChangeText={cloudText => setCloudText(cloudText)}
                            value={cloudText}
                            onSubmitEditing={handleSubmit}
                            />
                        <Text>{value}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                       
    {/* ++++++++++++++++++++ CAMERA MODAL ++++++++++++++++++++ */}
    
                        <Modal
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
                                <Text>First Modal</Text>
                              <Cam/>
                               <Button title="Close Camera" onPress={() => setCamModalVisible(!camModalVisible)}><Text>X</Text></Button>
                            </View>
                            </View>
                        </Modal>
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++ RECORDING MODAL +++++++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                {/*     
                        <Modal
                        animationType='slide'
                        transparent={true}
                        presentationStyle="overFullScreen"
                        visible={recModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal Closed");
                            setRecModalVisible(!recModalVisible);
                        }}
                        >
                        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 22}}>
                            <View style={{margin: 20, backgroundColor: 'white', height: 550, width: 330, borderRadius: 20, padding: 35, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { 
                                width: 0, height: 2
                            }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 20}}>
                                <Button title="X" onPress={() => setRecModalVisible(!recModalVisible)}><Text>Close Modal</Text></Button>
                                <Text>Second Modal</Text>
                              <Rec/>
                            </View>
                            </View>
                        </Modal> */}
                        {/* <Button title="open cam" style={{marginTop: 50}} onPress={() => setCamModalVisible(true)}><Text>Open Cam</Text></Button> */}
                        </View>
                    {/* <View> */}
                    </ScrollView>
                    {/* </View> */}
                    {/* <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}> */}
                        {/* <ScrollView>
                            {cloud} 
                        </ScrollView>  */}
                  {/* </View> */}

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++ CAMERA DISPLAY BLOCK ++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */} 

                <View style={styles.container}>
                    {/* <Text>Image</Text> */}
                 <Image source={{ uri: selectedImage }}
                   style={{ width: 150, height: 150, margin: 10 }}
                />
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* ++++++++++++++++++++++ RECORDING DISPLAY BLOCK ++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                        {/* <View style={{width: 150, height: 150, borderWidth: 1, borderColor: 'black', margin: 10 }}>
                        </View> */}
                </View>

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* ++++++++++++++++++++++ CAMERA/GALLERY BUTTONS +++++++++++++++++++++++ */}
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 50, marginBottom: 40 }}>
                    <Card style={{  justifyContent: 'center', width: 100, height: 55, paddingTop: 5, alignItems: 'center', marginTop: 1, borderRadius: 10}}>
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
                    </Card>
                    {/* <Card style={{  justifyContent: 'center', width: 100, height: 55, paddingTop: 5, alignItems: 'center', marginTop: 1, borderRadius: 10}}>
                        <IconButton
                            icon="record"
                            onPress={() => 
                                // navigation.navigate('Rec')
                                setRecModalVisible(true)

                            }
                            />
                    </Card> */}
                </View>
            </Container>
        )
    }


const Cam = ({navigation}) => {

    const [ hasGalleryPermission, setHasGalleryPermission ] = useState(null);
    const [ hasCameraPermission, setHasCameraPermission ] = useState(null);
    const [ camera, setCamera ] = useState(null);
    const [ cameraRef, setCameraRef ] = useState(null);
    const [ image, setImage ] = useState(null);
    const [ type, setType ] = useState(Camera.Constants.Type.back);
    
    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');

            const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');

        })();
    }, []);

    const takePicture = async () => { 
        if(camera){
            const data = await camera.takePictureAsync();
            // console.log(data.uri)
            setImage(data.uri)
            console.log(data.uri)
            const asset = await MediaLibrary.createAssetAsync(data.uri);
            const albumName ="CCC";
            Alert.alert(
                "Nice Shot!",
                "Your photo is saved in your gallery.",
                [ 
                    {
                        text: "OK"
                    }
                ]
            )
        }
    }

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //       allowsEditing: true,
    //       aspect: [1, 1],
    //       quality: 1,
    //     });
    //     console.log(result);
    
    //     if (!result.cancelled) {
    //       setImage(result.uri);
    //     }
    //   };

    if (hasCameraPermission === null || hasGalleryPermission === false) {
        return <View />;
    }
    if (hasCameraPermission === false || hasGalleryPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
            <View style={{flex: 1}}>
                <View style={styles.cameraContainer}>
                    <Camera 
                            ref={ref => setCamera(ref)}
                            // ref={ref => setCameraRef(ref)}
                            style={styles.fixedRatio} 
                            type={type}
                            ratio={'1:1'}
                            autoFocus='on' />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 0, marginTop: 70 }}>
                    <Image source={{uri: image}} style={{flex: 1, resizeMode: 'contain', height: 50, width: 270}}/>
                    {/* // {image && <Image source={{uri: image}} style={{flex: 1,}}/>} */}
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button
                        title="Flip Image"
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                                );
                        }}>
                    </Button>
                    <Button
                        title="Take Picture"
                        onPress={() => takePicture()}
                    />
                </View>
            </View>
        )
    }

    const Rec = () => {

        const [recording, setRecording] = React.useState();
        const [playing, setPlaying] = React.useState();
        async function startRecording() {
          try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
              allowsRecordingIOS: true,
              playsInSilentModeIOS: true,
            }); 
            console.log('Starting recording..');
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync(); 
            setRecording(recording);
            console.log('Recording started');
          } catch (err) {
            console.error('Failed to start recording', err);
          }
        }
      
        async function stopRecording() {
          console.log('Stopping recording..');
          setRecording(undefined);
          await recording.stopAndUnloadAsync();
          const uri = recording.getURI(); 
          await recording.createNewLoadedSoundAsync(uri)
          console.log('Recording stopped and stored at', uri);
        }
      
      
        async function playRecording() {
            console.log('Playing recording..');
      
              //  await record.loadAsync()
              // const sound = uri
              // await recording.playAsync()
        }
      
        async function stopPlayingRecording() {
            console.log('Stop playing recording..')
      
        }
      
        return (
          <View style={styles.container}>
            <Button
              title={recording ? 'Stop Recording' : 'Start Recording'}
              onPress={recording ? stopRecording : startRecording}
            />
            <Button 
              title={playing ? 'Stop Recording' : 'Play Recording'}
              onPress={() => playRecording()}
            />
      
          </View>
        );
      }




    export default createTC;


const styles = StyleSheet.create ({
    // container: {
        //     flex: 1,
        //     backgroundColor: '#fff',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        
        // },

        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '300px',
            maxHeight: '400px',
            marginTop: 20
        },
        
        input: {
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
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    },
    
})





    // const styles = StyleSheet.create({
    //     cameraContainer: {
    //         flex: 1,
    //         flexDirection: 'row',
            
    //     },
    //     fixedRatio: {
    //         flex: 1,
    //         aspectRatio: 1
    //     },

//////////////////////////////
        // container: {
        //   flex: 1,
        // },
        // camera: {
        //   flex: 1,
        // },
        // buttonContainer: {
        //   flex: 1,
        //   backgroundColor: 'transparent',
        //   flexDirection: 'row',
        //   margin: 20,
        // },
        // button: {
        //   flex: 0.1,
        //   alignSelf: 'flex-end',
        //   alignItems: 'center',
        // },
        // text: {
        //   fontSize: 18,
        //   color: 'white',
        // },
    //   });

    

//     addCloudFunc() {
        
//         if (this.state.cloudText) {
            
//             var d = new Date();
//             this.state.cloudArray.push({
//                 'date': d.getFullYear() + 
//                 '/' + (d.getMonth() + 1) +
//                 '/' + d.getDate(), 
//                 // (d.getMonth() + 1) +
//                 // '/' + d.getDate() +
//                 // '/' + d.getFullYear(),
//                 'cloudTitle': this.state.cloudTitle,
//                 'cloudText': this.state.cloudText
                
//             });
//             this.setState({ cloudArray: this.state.cloudArray })
//             this.setState({ cloudTitle: ''})
//             this.setState({ cloudText: ''})
            
//         }
//         // alert('test');
//     }
    
//     deleteCloud(key) {
//         this.state.cloudArray.splice(key, 1);
//         this.setState({ cloudArray: this.state.cloudArray })
//     }
// }



// state = {
//     cloud: {
//         cloud: ""
//     }
// }

// const [cloudArray] = useState([]);
// const [cloudTitle] = useState('');
// const [cloudText] = useState('');
    // this.getCloud();
    // this.subscriber = firebase().collection("clouds").doc
    // ("VjkIZJVwJWStEgiHNmPo").onSnapshot(doc => {
    //         this.setState({
    //             cloud: {
    //                 cloud: doc.cloud
    //             }})
    // })}

    // getCloud = async () => {
    //     const cloudDocument = firestore().collection("clouds").doc("VjkIZJVwJWStEgiHNmPo").get()
    //     console.log("cloudDocument")
    

    // async addClouds() {
    //     const doc = await firestore().collection("Clouds").doc()
    // }
    
    // const cloudCollection = firestore().collection('Clouds');



// const createTC = (props) => {
//     const data = useSelector((state) => state);
//     const clouds = state.data.map((val, key) => {
//             return <Clouds key={key} keyval={key} val={val}
//                    deleteMethod= { () => this.deleteCloud(key) } /> 
//         });
//     const dispatch = useDispatch();
//     const [cloudTitle, setCloudTitle] = useState();
//     const [cloudText, setCloudText] = useState();

//     let clouds = data.map((val, key) => {
//         return <Clouds key={key} keyval={key} val={val}
//                deleteMethod= { () => this.deleteCloud(key) } /> 
//     });









{/* <SafeAreaView style={{ flex: 1 }}>
                            {/* <Controls
                                // handleColorChange={this.changeColor}
                                // handleBrushSizeChange={this.changeBrushSize}
                                // selectedColor={this.state.color}
                                // selectedStrokeWidth={this.state.strokeWidth}
                                // handleUndo={this.undo}
                                // handleClear={this.clear}
                            /> */}
                            {/* <Text style={{alignItems: 'center'}}>Sketch It Out!</Text> */}
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Button title="Undo" onPress={() => this.RNDraw.undo()}><Text>Undo</Text></Button>
                                <Button title="Clear" onPress={() => this.RNDraw.clear()}><Text>Clear</Text></Button>
                                </View>
                                <View
                                style={{
                                    flex: 1,
                                    flexGrow: 1,
                                    border: 'solid',
                                    borderWidth: 2,
                                    borderColor: '#ccc',
                                    width: 315,
                                    height: 300,
                                    marginLeft: 30,
                                marginTop: 5,
                                marginBottom: 20,
                            
                            }}
                            >
                            <RNDrawOnScreen
                            penColor={'#000'}
                                strokeWidth={5}
                                ref={(r) => (this.RNDraw = r)}
                                />
                                </View>
                        </SafeAreaView> */} 
              {/* </ScrollView> */}



              // const [cloudArray] = useState([]);
 
// export default class createTC extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cloudArray: [],
//             cloudTitle: '',
//             cloudText: '',
//         }
        
//     }
    
//     render() {
//         let clouds = this.state.cloudArray.map((val, key) => {
//             return <Clouds key={key} keyval={key} val={val}
//             deleteMethod= { ()=> this.deleteCloud(key) } />          
//         });
        //  const cloudCollection = firestore().collection('Clouds');

// const [ image, setImage ] = useState(null);
    // const [picture, setPicture] = useState();
    // const [ hasGalleryPermission, setHasGalleryPermission ] = useState(null);
    // const [ hasCameraPermission, setHasCameraPermission ] = useState(null);

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //       allowsEditing: true,
    //       aspect: [1, 1],
    //       quality: 1,
    //     });
    //     console.log(result);
    
    //     if (!result.cancelled) {
    //       setImage(result.uri);
    //     }
    //   };

    // if (hasCameraPermission === null || hasGalleryPermission === false) {
    // }
    // if (hasCameraPermission === false || hasGalleryPermission === false) {
    // }