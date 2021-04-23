import React from 'react';
import { Button, Image, Text, View } from 'react-native';


const ImageCom = (props) => {

    return (
        <View style={{flex: 1, width: 150, height: 150, padding: 10, margin: 10, borderWidth: 1, borderColor: 'Black', alignItems: 'center', justifyContent: 'center'}}>
            <Text>Baby Photo</Text>
            <Button title="Click to Change Title" onPress={() => props.changeWord('devin')}>Click to Change Title</Button>
        </View>
    )
}

export default ImageCom;