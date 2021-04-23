import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Entypo } from '@expo/vector-icons'
// export default class Clouds extends React.Component {

    const Clouds = ({clouds, setClouds, handleTriggerEdit}) => {
        const [ swipedRow, setSwipedRow ] = useState(null);

        const handleDeleteCloud = (rowMap, rowKey) => {
            const newClouds = [...clouds];
            const cloudIndex = clouds.findIndex((cloud) => cloud.key === rowKey);
            newClouds.splice(cloudIndex, 1);
            // setClouds(newClouds);

            
        AsyncStorage.setItem("storedClouds", JSON.stringify(newClouds)).then(() => {
            setClouds(newClouds);
            // setModalVisible(false);
        }).catch(error => console.log(error));
        }

    return (
        <>
        {clouds.length == 0 && <Text style={{marginTop: 20, padding: 100, justifyContent: 'center'}}>Let Your Creativity Out . . .</Text>}
        {clouds.length != 0 && <View style={{width: 350, height: '70%', marginTop: 10, marginBottom: 50}}
        > 
            <StatusBar style="light"/>
            <SwipeListView 
                data={clouds}
                renderItem={(data) => {
                    return (
                    <TouchableHighlight style={styles.cloudView} underlayColor='#B5C4F4' onPress={() => { handleTriggerEdit(data.item)  }}>
                        <>
                        <Text style={styles.cloudTitle}>{data.item.title}</Text>
                        <Text style={styles.cloudText}>{data.item.thought}</Text>
                        <Text style={styles.cloudDate}>{data.item.date}</Text>
                        </>
                    </TouchableHighlight>
                    )
                }}
                renderHiddenItem={(data, rowMap) => {
                    return (
                    <View style={styles.cloudHidden}>
                        <TouchableOpacity style={styles.btnHidden} onPress={() => handleDeleteCloud(rowMap, data.item.key)}>
                            <Entypo name="trash" size={20} color='white'/>
                        </TouchableOpacity>
                    </View>
                    )
                }}
                leftOpenValue={80}
                previewRowKey={"1"}
                previewOpenValue={80}
                previewOpenDelay={3000}
                disableLeftSwipe={true}
                showsVerticalScrollIndicator={false}
                style={{
                    flex:1, paddingBottom: 30, marginBottom: 40
                }}
                onRowOpen={(rowKey) => {
                    setSwipedRow(rowKey);
                }}
                onRowClose={() => {
                    setSwipedRow(null);
                }}
            />
     </View>}
     </>
    )
}


export default Clouds;


const styles = StyleSheet.create({
   

    cloudView: {
        minHeight: 100,
        // width: 200,
        padding: 15,
        justifyContent: 'space-around',
        // alignItems: 'left',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderLeftColor: 'gray',
        borderLeftWidth: 1
    },
   
    cloudTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'black',
        textAlign: 'left',
        textTransform: 'uppercase'
    },
   cloudText: {
        fontSize: 14,
        letterSpacing: 1,
        color: 'black',
        textAlign: 'left',
        textTransform: 'uppercase'
   },
   cloudDate: {
        fontSize: 10,
        letterSpacing: 1,
        letterSpacing: 1,
        color: 'black',
        textAlign: 'right',
        textTransform: 'uppercase'
    },
    cloudHidden: {
        backgroundColor: '#00142d',
        minHeight: 100,
        padding: 15,
        justifyContent: 'center',
        marginBottom: 15,
        borderRadius: 10
    },
    btnHidden: {
       
        width: 55,
        alignItems: 'center'
    },

   
   ////////////////////////////////
   
    cloud: {
        position: 'relative',
        width: 300,
        padding: 20,
        paddingRight: 100,
        // borderTopWidth: 2,
        // borderTopColor: '#ededed',
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        borderRadius: 5
    },
    cloudTitleText: {
        fontWeight: 'bold',
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    cloudText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    cloudDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius: 20,
        height: 65
    },
    cloudDeleteText: {
        color: 'white',
    }

});