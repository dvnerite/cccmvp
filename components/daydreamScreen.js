import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';



const daydreamScreen = () => {
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
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Daydream Sessions</Text>
        </View>
        </View>
    )
}

export default daydreamScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });