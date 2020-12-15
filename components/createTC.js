import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';





const createTC = () => {
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
                <Text style={{ fontSize: 20, fontWeight: '500' }}>Create Thought Cloud Screen</Text>
            </View>
        </View>
    )
}

export default createTC;