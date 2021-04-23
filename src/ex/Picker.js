import React, { useState, useEffect, useUri } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const Picker = () => {
    const [imgUrl, setImgUrl] = useState(imgUrl);
    // const [ selectedId, setSelectedId] = useState(null);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            
        })

        if (!result.cancelled) {
            setImgUrl(result.uri);
        }
    };

    // const FlatListItem = ({ image, setImg }) => {
    //     return (
    //         <View style={styles.container}>


    //         </View>
    //     )
    // }

    // const ImgSelector = ({ setImg }) => {
    //     // const [ selectedId, setSelectedId] = useState(null);
    //     const renderItem = ({ item }) => {
    //         return (
    //             <View setImg={setImg} image={item} />
    //         )
    //     }
    // }

    // const handleEditImg = (newImgUrl) => {
    //     setImgUrl(useUri);
    // }

    const handleUserImg = (useUri) => {
        setImgUrl(useUri);
    }

    // const handleSubmit = () => {
    //     props.onFormSubmit({
    //         id: props.id,
    //         imgUrl,
    //     });
    //     setImgUrl(defaultImage);
    // }

    return (

        <View style={styles.container}>
            <Text>Image Picker</Text>
            <Image source={{ uri: imgUrl }}
                   style={{ width: 250, height: 150 }}
            />
            <Button title='Select a Photo' handleUserImg={handleUserImg} onPress={pickImage}></Button>
        </View>
    )
}


export default Picker;


const styles = StyleSheet.create ({

container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '300px',
    maxHeight: '400px',
    marginTop: 20
}
    
})