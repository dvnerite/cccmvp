import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';



const createScreen = () => {
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
        <View style={{ marginTop: 20}}>
            <Button title="New Thought Cloud"></Button>
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
  