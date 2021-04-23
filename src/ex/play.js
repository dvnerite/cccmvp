import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';



class play extends Component {

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text> Play Screen</Text>
                <Text> Cloud: 
                    {/* {this.state.clouds.cloud}  */}
                </Text>
            </View>
        )
    }
}

export default play;