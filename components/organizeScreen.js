import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';



const organizeScreen = () => {
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
        <View style={styles.container}>
            <Text>Organize Screen</Text>
        </View>
        </View>
    )
}

export default organizeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });