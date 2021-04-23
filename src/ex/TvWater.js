import React from 'react';
import { Image, View, Text } from 'react-native';
import { Container, Header,  Left, Body, Right, Title } from 'native-base';
import { Card, Button } from 'react-native-paper';

///------------------------------ NAVIGATION --------------------------------///
import { createStackNavigator} from '@react-navigation/stack';

///------------------------------ IMPORTS ----------------------------------///
import createTC from '../main/createTC';

///------------------------------ NAVIGATORS ------------------------------///
const WaterNav = createStackNavigator();

WaterStack();

function WaterStack() {
    return (
        <WaterNav.Navigator>
            <WaterNav.Screen 
                name="TvWater"
                component={TvWater}
            />
            <WaterNav.Screen
                name="CreateTC"
                component={createTC}
            />
        </WaterNav.Navigator>
    )
}

const TvWater = ({ navigation }) => {
    return (
        <View>
            {/* <Container>
                <Header>
                    <Left/>
                        <Body>
                            <Title>CloudClub</Title>
                        </Body>
                    <Right/>
                </Header>
            </Container> */}
            <View style={{alignItems: 'center', marginTop: 1}}>
                <Card style={{ width: 405, paddingTop: 5,  alignItems: 'center'}}>
                    <Card.Title style={{ width: 400, marginLeft: 30 }} title="Water's Daydream"></Card.Title>
                </Card>
            </View>
            <View>
                <Image 
                    style={{ height: 200, width: 390}}
                    source={{
                        uri: 'https://i.ibb.co/Q64mC1q/WaterDD.png'
                    }}
                />
            </View>
            <View style={{alignItems: 'center', marginTop: 125}}>
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

export default TvWater;