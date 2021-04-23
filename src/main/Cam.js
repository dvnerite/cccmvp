import React, {useState, useEffect} from 'react';
import { Alert, Image, StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';



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
            const data = await camera.takePictureAsync(null);
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
                            style={styles.fixedRatio} 
                            type={type}
                            ratio={'1:1'} />
                </View>
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 0, marginTop: 70 }}>
                    <Image source={{uri: image}} style={{flex: 1, resizeMode: 'contain', height: 50, width: 270}}/>
                    {/* // {image && <Image source={{uri: image}} style={{flex: 1,}}/>} */}
                {/* </View> */}
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity style={{ margin: 10, width: 75, height: 50, backgroundColor: '#00142d', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                    }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Flip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10, width: 75, height: 50, backgroundColor: '#00142d', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => takePicture()}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Capture</Text>
                    </TouchableOpacity>
                </View>
                {/* <View>
                    <Button
                        title="Use"
                        onPress={ () => navigation.navigate('Save', {image})}
                        />
                          
                </View> */}
            </View>
        )
    }


    export default Cam;
    // export default CamStack;

    const styles = StyleSheet.create({
        cameraContainer: {
            flex: 1,
            flexDirection: 'row',
            width: 300,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center'
            
        },
        fixedRatio: {
            flex: 1,
            aspectRatio: 1
        },

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
      });



















///------------------------------ COMPONENTS ----------------------------------///
// import Save from './Save';

///------------------------------ NAVIGATION --------------------------------///
// import { createStackNavigator} from '@react-navigation/stack';

///------------------------------ NAVIGATORS ----------------------------------///
// const CamNav = createStackNavigator();
// CamStack();

// function CamStack() {

//     return(
//         <CamNav.Navigator mode="modal">
//             <CamNav.Screen 
//                 name="Cam"
//                 component={Cam}
//                 // navigation={this.props.navigation}

//             />
//             <CamNav.Screen 
//                 name="Save"
//                 component={Save}
                

//             />
//         </CamNav.Navigator>

//     )
// }



// export default function