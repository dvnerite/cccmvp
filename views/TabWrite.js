import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';


function TabWrite() {
    return (
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text 
                    style={{marginTop: 15}}            
                >
                    What Are You Thinking?
                </Text>
                <TextInput
                    style={{ marginTop: 17, height: 300, width: 375, borderColor: 'gray', borderWidth: 1, borderRadius: 3, fontSize: 22}}
                    multiline
                    // onChangeText={textInputValue => this.setState({textInputValue})}
                />
                {/* <Button
                    style={{ marginTop: 10}}
                    title="SAVE"
                    onPress={() => this.state}
                />
                <Button
                    style={{ marginTop: 10}}
                    title=" SKIP "
                    onPress={() => navigation.navigtate(TabDraw)}
                /> */}
                    {/* <Button
                    style={{ marginTop: 10}}
                    title="Go Home"
                    onPress={() => navigation.navigate('Home')}
                /> */}
        </View>
    )
}


export default TabWrite;