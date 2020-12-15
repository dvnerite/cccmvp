import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Card, Button } from 'react-native-paper';


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
        <View style={{alignItems: 'center', marginTop: 40}}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>LIFE ELEMENTAL</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
               <Card.Title style={{width: 400}} title="Water's Daydream">Card Title</Card.Title>
               <Card.Actions >
                   <Button color="#194776"
                           onPress
                   >Create</Button>
                   <Button color="#194776">Play</Button>
               </Card.Actions>
            </Card>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
            <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
               <Card.Title style={{width: 400}} title="Earth's Daydream">Card Title</Card.Title>
               <Card.Actions >
                   <Button color="#194776">Create</Button>
                   <Button color="#194776">Play</Button>
               </Card.Actions>
            </Card>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
            <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
               <Card.Title style={{width: 400}} title="Fire's Daydream">Card Title</Card.Title>
               <Card.Actions >
                   <Button color="#194776">Create</Button>
                   <Button color="#194776">Play</Button>
               </Card.Actions>
            </Card>
        </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
          <Card style={{ width: 400, paddingTop: 5,  alignItems: 'center'}}>
             <Card.Title style={{width: 400}} title="Air's Daydream">Card Title</Card.Title>
             <Card.Actions >
                 <Button color="#194776">Create</Button>
                 <Button color="#194776">Play</Button>
             </Card.Actions>
          </Card>
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