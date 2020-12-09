import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



const daydreamScreen = () => {
    return (
        <View style={styles.container}>
            <Text>DayDream Screen</Text>
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