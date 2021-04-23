import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';




export default function Login () {

    return (
        <View>
            <View style={{ padding: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#133D69'}}>
            <Image 
                style={{ width: 80, height: 60, marginBottom: 20}}
                source={{
                uri: 'https://i.ibb.co/xCfqzh8/Logo-1.png'}}/>
            <Text style={{color: 'white', fontSize: 17,}}>Welcome to CloudClub</Text>
            </View>
            <View style={{backgroundColor: '#133D69'}}>
                <Card style={{ height: 600, borderRadius: 60}}>
                    <View style={{alignItems: 'center', }}>
                    <TextInput 
                        style={styles.input}  
                        mode='outlined'
                        label="Email"
                    />
                    <TextInput 
                        style={styles.input}
                        mode='outlined'
                        label="Password"
                    />
                </View>
                <View style={{alignItems: 'center', justifyContent: "center", marginTop: 15}}>
                    {/* <Text>By signing up, you agree to our Terms of Use</Text> */}
                    <Button
                        style={{borderRadius: 10, marginTop: 20, width: 250}}
                        mode="contained"

                    >
                        Log-In
                    </Button>
                </View>
                </Card>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create ({


    input: {
        // borderWidth: 1,
        // borderColor: 'gray',
        padding: 0,
        marginTop: 30,
        width: 280,
        height: 30,
        backgroundColor: 'white',
        
    },
})