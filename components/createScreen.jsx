import React, {useState} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Button, Card } from 'react-native-paper';

///------------------------------ NAVIGATION --------------------------------///
import { createStackNavigator} from '@react-navigation/stack';


///------------------------------ IMPORTS ----------------------------------///
import createTC from './createTC';

///------------------------------ NAVIGATORS ------------------------------///
const CreateScreenStack = createStackNavigator();
CreateScreenStackNav();


function CreateScreenStackNav() {

    return(
            <CreateScreenStack.Navigator mode="modal">
                <CreateScreenStack.Screen 
                    name="createTC" 
                    component={createTC} />
            </CreateScreenStack.Navigator>
    )
}

const createScreen = () => {
    const navigation = useNavigation()

    return (
        <View>
        <Container>
            <Header>
            <Left/>
            <Body>
            <Title>CloudClub</Title>
            </Body>
            <Right />
            </Header>
        </Container>
        <View style={{alignItems: 'center', marginTop: 120}}>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Create</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20}}>
            <Button style ={{ width:300, borderRadius: 50 }}
                    title="New Thought Cloud"
                    mode="contained"
                    color="#194776"
                    onPress= {() => navigation.push('createTC')}
            >
            New Thought Cloud
            </Button>
        </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Edit Existing Thought Cloud</Text>
        </View>
        </View>
    )
}

export default createScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  