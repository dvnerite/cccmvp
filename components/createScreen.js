import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



const createScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Create Screen</Text>
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
  