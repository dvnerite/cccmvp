import React from 'react';
import { Text, TextInput,  View } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Tab, Tabs, Title } from 'native-base';
import { Card, Button } from 'react-native-paper';

///------------------------------ IMPORTS ----------------------------------///
import TabWrite from './TabWrite';
// import TabDraw from './TabDraw';
// import tabRec from './components/tabRec';
// import tabPic from './components/tabPic';


function createTC () {
    return (
        // <View>
        //     <View style={{alignItems: 'center', marginTop: 2, marginBottom: 2}}>
        //         <Card style={{ width: 405, paddingTop: 5,  alignItems: 'center'}}>
        //             <Card.Title style={{ width: 400 }} title="Track Title"></Card.Title>
        //         </Card>
        //     </View>
                <Container>
                    <Header hasTabs>
                    <Left/>
                    <Body>
                    <Title>CloudClub</Title>
                    </Body>
                    <Right />
                    </Header>
                    <Card style={{ width: 412, paddingTop: 5,  alignItems: 'center'}}>
                     <Card.Title style={{ width: 400 }} title="Track Title"></Card.Title>
                    </Card>
                    <Tabs>
                        <Tab heading="Write">
                            <TabWrite />
                        </Tab>
                        <Tab heading="Draw">
                            {/* <TabDraw /> */}
                        </Tab>
                        <Tab heading="Record">
                            {/* <TabRec /> */}
                        </Tab>
                        <Tab heading="Picture">
                        {/* <TabPic/> */}
                        </Tab>
                    </Tabs>
                </Container>
        //{/* </View> */}
    )
}

export default createTC;