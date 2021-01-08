import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Card, Button } from 'react-native-paper';

///------------------------------ NAVIGATION --------------------------------///
import { createStackNavigator} from '@react-navigation/stack';

///------------------------------ IMPORTS ----------------------------------///
import createTC from './createTC';

///------------------------------ NAVIGATORS ------------------------------///
const AirNav = createStackNavigator();

AirStack();

function AirStack() {
    return (
        <AirNav.Navigator>
            <AirNav.Screen 
                name="TvAir"
                component={TvAir}
            />
            <AirNav.Screen
                name="CreateTC"
                component={createTC}
            />
        </AirNav.Navigator>
    )
}


const TvAir = ({ navigation }) => {
    return (
        <View>
            <Container>
                <Header>
                    <Left/>
                        <Body>
                            <Title>CloudClub</Title>
                        </Body>
                    <Right/>
                </Header>
            </Container>
            <View style={{alignItems: 'center', marginTop: 67}}>
                <Card style={{ width: 405, paddingTop: 5,  alignItems: 'center'}}>
                    <Card.Title style={{ width: 400 }} title="Track Title"></Card.Title>
                </Card>
            </View>
            <View style={{alignItems: 'center', marginTop: 275}}>
            <Button style ={{ width:300, padding: 5, borderRadius: 50 }}
                    title="Create New Thought Cloud"
                    mode="contained"
                    color="#194776"
                    onPress={() => navigation.navigate("CreateTC")}
            >Create New Thought Cloud
            </Button>        
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
            <Button style ={{ width:300, padding: 5, borderRadius: 50 }}
                    title="Create New Thought Cloud"
                    mode="contained"
                    color="#194776"
                    onPress={() => alert('')}
            >View Recent Thought Clouds
            </Button>        
            </View>
        </View>

    )
}

export default TvAir;